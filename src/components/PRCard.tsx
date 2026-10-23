import { formatDistanceToNow } from 'date-fns'
import {
  GitPullRequest,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileCode2,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { useState } from 'react'
import type { PullRequest } from '../types'
import { scorePR } from '../lib/priority'

interface Props {
  pr: PullRequest
}

const LEVEL_CLASS: Record<string, string> = {
  critical: 'badge badge--critical',
  high: 'badge badge--high',
  normal: 'badge badge--normal',
  low: 'badge badge--low',
}

const CI_ICON = {
  success: <CheckCircle2 size={14} className="ci ci--success" />,
  failure: <AlertCircle size={14} className="ci ci--failure" />,
  pending: <Clock size={14} className="ci ci--pending" />,
  none: null,
}

export function PRCard({ pr }: Props) {
  const [expanded, setExpanded] = useState(false)
  const { score, level, reasons } = scorePR(pr)

  const idleLabel = formatDistanceToNow(new Date(pr.updatedAt), { addSuffix: true })

  return (
    <article className={`pr-card pr-card--${level}`}>
      <div className="pr-card__top">
        <div className="pr-card__meta">
          <span className="pr-card__repo">{pr.repo}</span>
          <span className="pr-card__number">#{pr.number}</span>
          {pr.isDraft && <span className="badge badge--draft">Draft</span>}
        </div>

        <div className="pr-card__badges">
          <span className={LEVEL_CLASS[level]}>
            {level.charAt(0).toUpperCase() + level.slice(1)} · {score}
          </span>
          {CI_ICON[pr.ciStatus]}
        </div>
      </div>

      <a
        href={pr.url}
        target="_blank"
        rel="noopener noreferrer"
        className="pr-card__title"
      >
        <GitPullRequest size={16} className="pr-card__pr-icon" />
        {pr.title}
      </a>

      <div className="pr-card__row">
        <img
          src={pr.authorAvatar}
          alt={pr.author}
          className="pr-card__avatar"
          width={20}
          height={20}
        />
        <span className="pr-card__author">{pr.author}</span>
        <span className="pr-card__divider">·</span>
        <Clock size={12} />
        <span className="pr-card__idle">{idleLabel}</span>
        <span className="pr-card__divider">·</span>
        <FileCode2 size={12} />
        <span className="pr-card__churn">
          <span className="pr-card__add">+{pr.additions}</span>
          {' / '}
          <span className="pr-card__del">-{pr.deletions}</span>
          {' · '}
          {pr.changedFiles} files
        </span>
        <span className="pr-card__divider">·</span>
        <MessageSquare size={12} />
        <span>{pr.comments + pr.reviewComments}</span>
      </div>

      {pr.labels.length > 0 && (
        <div className="pr-card__labels">
          {pr.labels.map((l) => (
            <span key={l} className="label">{l}</span>
          ))}
        </div>
      )}

      <button
        className="pr-card__expand"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-label={expanded ? 'Hide priority reasons' : 'Show priority reasons'}
      >
        Why this priority?
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {expanded && (
        <ul className="pr-card__reasons">
          {reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
