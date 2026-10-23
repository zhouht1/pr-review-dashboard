/* ── GitHub API integration ─────────────────────────────────────── */

import type { PullRequest, ReviewState } from '../types'

const BASE = 'https://api.github.com'

interface GHPullRequest {
  id: number
  number: number
  title: string
  html_url: string
  user: { login: string; avatar_url: string }
  created_at: string
  updated_at: string
  draft: boolean
  additions: number
  deletions: number
  changed_files: number
  comments: number
  review_comments: number
  labels: Array<{ name: string }>
  requested_reviewers: Array<{ login: string }>
  head: { repo: { full_name: string } }
}

interface GHCheckRun {
  conclusion: string | null
}

function mapReviewState(reviews: Array<{ state: string }>): ReviewState {
  if (reviews.some((r) => r.state === 'CHANGES_REQUESTED')) return 'changes_requested'
  if (reviews.some((r) => r.state === 'APPROVED')) return 'approved'
  if (reviews.some((r) => r.state === 'PENDING')) return 'pending'
  return 'none'
}

function mapCIStatus(
  checks: GHCheckRun[],
): PullRequest['ciStatus'] {
  if (checks.length === 0) return 'none'
  if (checks.some((c) => c.conclusion === 'failure')) return 'failure'
  if (checks.some((c) => c.conclusion === null)) return 'pending'
  return 'success'
}

export async function fetchRepoPRs(
  owner: string,
  repo: string,
  token: string,
): Promise<PullRequest[]> {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }

  const listRes = await fetch(
    `${BASE}/repos/${owner}/${repo}/pulls?state=open&per_page=50`,
    { headers },
  )

  if (!listRes.ok) {
    throw new Error(
      `GitHub API ${listRes.status}: ${listRes.statusText} (${owner}/${repo})`,
    )
  }

  const list: GHPullRequest[] = await listRes.json()

  // Enrich each PR with reviews + checks (parallelised)
  const enriched = await Promise.all(
    list.map(async (pr) => {
      const [reviewsRes, checksRes] = await Promise.all([
        fetch(`${BASE}/repos/${owner}/${repo}/pulls/${pr.number}/reviews`, { headers }),
        fetch(`${BASE}/repos/${owner}/${repo}/commits/${pr.number}/check-runs`, { headers }),
      ])

      const reviews: Array<{ state: string }> = reviewsRes.ok
        ? await reviewsRes.json()
        : []

      const checksBody = checksRes.ok ? await checksRes.json() : { check_runs: [] }
      const checks: GHCheckRun[] = checksBody.check_runs ?? []

      return {
        id: pr.id,
        number: pr.number,
        title: pr.title,
        url: pr.html_url,
        author: pr.user.login,
        authorAvatar: pr.user.avatar_url,
        repo: `${owner}/${repo}`,
        createdAt: pr.created_at,
        updatedAt: pr.updated_at,
        isDraft: pr.draft,
        additions: pr.additions ?? 0,
        deletions: pr.deletions ?? 0,
        changedFiles: pr.changed_files ?? 0,
        comments: pr.comments ?? 0,
        reviewComments: pr.review_comments ?? 0,
        labels: pr.labels.map((l) => l.name),
        reviewState: mapReviewState(reviews),
        requestedReviewers: pr.requested_reviewers.map((r) => r.login),
        ciStatus: mapCIStatus(checks),
      } satisfies PullRequest
    }),
  )

  return enriched
}

export async function fetchMultipleRepos(
  repos: Array<{ owner: string; name: string }>,
  token: string,
): Promise<PullRequest[]> {
  const results = await Promise.allSettled(
    repos.map((r) => fetchRepoPRs(r.owner, r.name, token)),
  )

  return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
}
