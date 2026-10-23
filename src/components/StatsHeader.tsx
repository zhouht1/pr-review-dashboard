interface Props {
  totals: {
    total: number
    critical: number
    failing: number
    waiting: number
  }
}

export function StatsHeader({ totals }: Props) {
  return (
    <div className="stats">
      <div className="stats__item">
        <span className="stats__value">{totals.total}</span>
        <span className="stats__label">Open PRs</span>
      </div>
      <div className="stats__item stats__item--critical">
        <span className="stats__value">{totals.critical}</span>
        <span className="stats__label">Critical</span>
      </div>
      <div className="stats__item stats__item--failing">
        <span className="stats__value">{totals.failing}</span>
        <span className="stats__label">CI Failing</span>
      </div>
      <div className="stats__item stats__item--waiting">
        <span className="stats__value">{totals.waiting}</span>
        <span className="stats__label">Needs Review</span>
      </div>
    </div>
  )
}
