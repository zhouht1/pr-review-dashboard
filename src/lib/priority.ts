import type { PriorityResult, PullRequest } from '../types'

const DAY = 1000 * 60 * 60 * 24

export function scorePR(pr: PullRequest, now = Date.now()): PriorityResult {
  const reasons: string[] = []
  let score = 0

  const idleDays = (now - new Date(pr.updatedAt).getTime()) / DAY
  const openDays = (now - new Date(pr.createdAt).getTime()) / DAY

  if (idleDays >= 7) { score += 45; reasons.push(`No activity for ${Math.floor(idleDays)} days`) }
  else if (idleDays >= 3) { score += 30; reasons.push(`No activity for ${Math.floor(idleDays)} days`) }
  else if (idleDays >= 1) { score += 15; reasons.push(`No activity for ${Math.floor(idleDays)} day(s)`) }

  if (openDays >= 14) { score += 20; reasons.push(`Open for ${Math.floor(openDays)} days`) }
  else if (openDays >= 5) { score += 10; reasons.push(`Open for ${Math.floor(openDays)} days`) }

  switch (pr.reviewState) {
    case 'changes_requested': score += 18; reasons.push('Changes requested'); break
    case 'approved':          score += 12; reasons.push('Approved but not merged'); break
    case 'pending':           score += 8;  reasons.push('Review in progress'); break
    case 'none':
      if (!pr.isDraft) { score += 6; reasons.push('No review yet') }
      break
  }

  const churn = pr.additions + pr.deletions
  if (churn > 800)      { score += 15; reasons.push(`Very large diff (+${pr.additions}/-${pr.deletions})`) }
  else if (churn > 300) { score += 8;  reasons.push(`Large diff (+${pr.additions}/-${pr.deletions})`) }

  const urgentLabels = pr.labels.filter((l) => /urgent|critical|p0|blocker|hotfix/i.test(l))
  if (urgentLabels.length > 0) { score += 25; reasons.push(`Labeled ${urgentLabels.join(', ')}`) }

  if (pr.ciStatus === 'failure') { score += 20; reasons.push('CI failing') }
  if (pr.isDraft) { score -= 40; reasons.push('Draft — not ready for review') }
  if (pr.requestedReviewers.length === 0 && pr.reviewState === 'none') score -= 5

  const finalScore = Math.max(0, Math.round(score))
  let level: PriorityResult['level'] = 'low'
  if (finalScore >= 70)      level = 'critical'
  else if (finalScore >= 45) level = 'high'
  else if (finalScore >= 20) level = 'normal'

  return { score: finalScore, level, reasons }
}

export function sortPRs(
  prs: PullRequest[],
  key: 'priority' | 'updated' | 'created' | 'size',
  now = Date.now(),
): PullRequest[] {
  const copy = [...prs]
  switch (key) {
    case 'priority': return copy.sort((a, b) => scorePR(b, now).score - scorePR(a, now).score)
    case 'updated':  return copy.sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime())
    case 'created':  return copy.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    case 'size':     return copy.sort((a, b) => (b.additions + b.deletions) - (a.additions + a.deletions))
  }
}
