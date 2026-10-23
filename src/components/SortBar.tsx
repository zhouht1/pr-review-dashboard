import type { SortKey } from '../types'

interface Props {
  sortKey: SortKey
  onSortChange: (k: SortKey) => void
  filterDrafts: boolean
  onToggleDrafts: (v: boolean) => void
}

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'priority', label: 'Priority' },
  { key: 'updated',  label: 'Last updated' },
  { key: 'created',  label: 'Oldest first' },
  { key: 'size',     label: 'Largest diff' },
]

export function SortBar({ sortKey, onSortChange, filterDrafts, onToggleDrafts }: Props) {
  return (
    <div className="sort-bar">
      <div className="sort-bar__group" role="group" aria-label="Sort pull requests by">
        {SORT_OPTIONS.map(({ key, label }) => (
          <button
            key={key}
            className={`sort-bar__btn${sortKey === key ? ' sort-bar__btn--active' : ''}`}
            onClick={() => onSortChange(key)}
            aria-pressed={sortKey === key}
          >
            {label}
          </button>
        ))}
      </div>

      <label className="sort-bar__toggle">
        <input
          type="checkbox"
          checked={filterDrafts}
          onChange={(e) => onToggleDrafts(e.target.checked)}
          aria-label="Hide draft pull requests"
        />
        Hide drafts
      </label>
    </div>
  )
}
