export type ReviewState =
  | 'approved'
  | 'changes_requested'
  | 'pending'
  | 'none'

export interface PullRequest {
  id: number
  number: number
  title: string
  url: string
  author: string
  authorAvatar: string
  repo: string
  createdAt: string
  updatedAt: string
  isDraft: boolean
  additions: number
  deletions: number
  changedFiles: number
  comments: number
  reviewComments: number
  labels: string[]
  reviewState: ReviewState
  requestedReviewers: string[]
  ciStatus: 'success' | 'failure' | 'pending' | 'none'
}

export interface PriorityResult {
  score: number
  level: 'critical' | 'high' | 'normal' | 'low'
  reasons: string[]
}

export type SortKey = 'priority' | 'updated' | 'created' | 'size'

export interface RepoConfig {
  owner: string
  name: string
}
