import { useState, useMemo } from 'react'
import type { SortKey } from './types'
import { sortPRs, scorePR } from './lib/priority'
import { usePullRequests } from './lib/usePullRequests'
import { PRCard } from './components/PRCard'
import { SortBar } from './components/SortBar'
import { StatsHeader } from './components/StatsHeader'
import './app.css'

export default function App() {
  const { prs, loading, error, isDemo, reload } = usePullRequests()
  const [sortKey, setSortKey] = useState<SortKey>('priority')
  const [filterDrafts, setFilterDrafts] = useState(true)

  const visible = useMemo(() => {
    const filtered = filterDrafts ? prs.filter((p) => !p.isDraft) : prs
    return sortPRs(filtered, sortKey)
  }, [prs, sortKey, filterDrafts])

  const totals = useMemo(() => {
    const critical = prs.filter((p) => scorePR(p).level === 'critical').length
    const failing = prs.filter((p) => p.ciStatus === 'failure').length
    const waiting = prs.filter((p) => p.reviewState === 'none' && !p.isDraft).length
    return { total: prs.length, critical, failing, waiting }
  }, [prs])

  if (loading) {
    return (
      <div className="app">
        <header className="app__header">
          <h1>PR Review Dashboard</h1>
          <p className="app__subtitle">Loading pull requests…</p>
        </header>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>PR Review Dashboard</h1>
        <p className="app__subtitle">
          Prioritize and track open pull requests across your repositories
        </p>
      </header>

      {error && (
        <div className="app__error" role="alert">
          {error}
          <button onClick={reload}>Retry</button>
        </div>
      )}

      {isDemo && (
        <p className="app__demo-note">
          Showing demo data. Set <code>VITE_GITHUB_TOKEN</code> and{' '}
          <code>VITE_REPOS</code> in <code>.env.local</code> to load real PRs.
        </p>
      )}

      <StatsHeader totals={totals} />

      <SortBar
        sortKey={sortKey}
        onSortChange={setSortKey}
        filterDrafts={filterDrafts}
        onToggleDrafts={setFilterDrafts}
      />

      <main className="app__list">
        {visible.length === 0 && (
          <p className="app__empty">No pull requests to review. Nice.</p>
        )}
        {visible.map((pr) => (
          <PRCard key={pr.id} pr={pr} />
        ))}
      </main>

      <footer className="app__footer">
        <span>PR Review Dashboard · MIT License</span>
      </footer>
    </div>
  )
}
