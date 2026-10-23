import { describe, it, expect } from 'vitest'
import { scorePR, sortPRs } from '../src/lib/priority'
import type { PullRequest } from '../src/types'

// ── helpers ──────────────────────────────────────────────────────────────────

const now = Date.now()
const daysAgo = (d: number) => new Date(now - d * 86_400_000).toISOString()

function makePR(overrides: Partial<PullRequest> = {}): PullRequest {
  return {
    id: 1, number: 1,
    title: 'test PR',
    url: 'https://github.com/x/y/pull/1',
    author: 'user', authorAvatar: '',
    repo: 'x/y',
    createdAt: daysAgo(1), updatedAt: daysAgo(1),
    isDraft: false,
    additions: 10, deletions: 5, changedFiles: 1,
    comments: 0, reviewComments: 0,
    labels: [],
    reviewState: 'none',
    requestedReviewers: [],
    ciStatus: 'success',
    ...overrides,
  }
}

// ── scorePR ───────────────────────────────────────────────────────────────────

describe('scorePR', () => {
  it('scores a fresh, small, passing PR low', () => {
    const pr = makePR({ createdAt: daysAgo(0.5), updatedAt: daysAgo(0.5) })
    const { score, level } = scorePR(pr, now)
    expect(score).toBeLessThan(20)
    expect(level).toBe('low')
  })

  it('draft PRs score near zero regardless of age', () => {
    const pr = makePR({ createdAt: daysAgo(20), updatedAt: daysAgo(10), isDraft: true })
    const { score } = scorePR(pr, now)
    expect(score).toBeLessThanOrEqual(20)
  })

  it('7+ days idle with changes_requested and CI failure pushes toward critical', () => {
    const pr = makePR({
      createdAt: daysAgo(20), updatedAt: daysAgo(8),
      reviewState: 'changes_requested',
      ciStatus: 'failure',
    })
    const { score, level } = scorePR(pr, now)
    expect(score).toBeGreaterThanOrEqual(70)
    expect(level).toBe('critical')
  })

  it('p0 label adds 25 points', () => {
    const base = makePR({ createdAt: daysAgo(0.5), updatedAt: daysAgo(0.5), requestedReviewers: ['bob'] })
    const withLabel = { ...base, labels: ['p0'] }
    expect(scorePR(withLabel, now).score).toBe(scorePR(base, now).score + 25)
  })

  it('CI failure adds 20 points', () => {
    const base = makePR({ createdAt: daysAgo(0.5), updatedAt: daysAgo(0.5), requestedReviewers: ['bob'] })
    const failing = { ...base, ciStatus: 'failure' as const }
    expect(scorePR(failing, now).score).toBe(scorePR(base, now).score + 20)
  })

  it('approved-but-unmerged scores higher than no-review', () => {
    const approved = makePR({ reviewState: 'approved', createdAt: daysAgo(2), updatedAt: daysAgo(2) })
    const pending  = makePR({ reviewState: 'none',     createdAt: daysAgo(2), updatedAt: daysAgo(2) })
    expect(scorePR(approved, now).score).toBeGreaterThan(scorePR(pending, now).score)
  })

  it('very large diff (>800 lines) adds 15 points', () => {
    const small = makePR({ additions: 50, deletions: 20, requestedReviewers: ['bob'], createdAt: daysAgo(0.5), updatedAt: daysAgo(0.5) })
    const large = { ...small, additions: 700, deletions: 200 }
    expect(scorePR(large, now).score).toBe(scorePR(small, now).score + 15)
  })

  it('score is never negative', () => {
    const pr = makePR({ isDraft: true, createdAt: daysAgo(0.1), updatedAt: daysAgo(0.1) })
    expect(scorePR(pr, now).score).toBeGreaterThanOrEqual(0)
  })

  it('returns reasons array that explains each signal', () => {
    const pr = makePR({
      createdAt: daysAgo(20), updatedAt: daysAgo(9),
      ciStatus: 'failure',
      labels: ['blocker'],
    })
    const { reasons } = scorePR(pr, now)
    expect(reasons.length).toBeGreaterThan(0)
    expect(reasons.some((r) => /days/i.test(r))).toBe(true)
    expect(reasons.some((r) => /CI failing/i.test(r))).toBe(true)
    expect(reasons.some((r) => /blocker/i.test(r))).toBe(true)
  })
})

// ── sortPRs ───────────────────────────────────────────────────────────────────

describe('sortPRs', () => {
  const old   = makePR({ id: 1, createdAt: daysAgo(10), updatedAt: daysAgo(8) })
  const mid   = makePR({ id: 2, createdAt: daysAgo(5),  updatedAt: daysAgo(2) })
  const fresh = makePR({ id: 3, createdAt: daysAgo(1),  updatedAt: daysAgo(0.2) })
  const prs = [fresh, old, mid]

  it('priority sort puts high-scoring PRs first', () => {
    const sorted = sortPRs([fresh, old], 'priority', now)
    expect(scorePR(sorted[0], now).score).toBeGreaterThanOrEqual(scorePR(sorted[1], now).score)
  })

  it('updated sort puts least-recently-updated first', () => {
    const sorted = sortPRs(prs, 'updated', now)
    expect(sorted[0].id).toBe(old.id)
    expect(sorted[2].id).toBe(fresh.id)
  })

  it('created sort puts oldest-created first', () => {
    const sorted = sortPRs(prs, 'created', now)
    expect(sorted[0].id).toBe(old.id)
  })

  it('size sort puts largest diff first', () => {
    const small = makePR({ id: 10, additions: 5,   deletions: 2 })
    const big   = makePR({ id: 11, additions: 500, deletions: 300 })
    const sorted = sortPRs([small, big], 'size', now)
    expect(sorted[0].id).toBe(big.id)
  })

  it('does not mutate the original array', () => {
    const original = [fresh, old, mid]
    const copy = [...original]
    sortPRs(original, 'priority', now)
    expect(original.map((p) => p.id)).toEqual(copy.map((p) => p.id))
  })
})
