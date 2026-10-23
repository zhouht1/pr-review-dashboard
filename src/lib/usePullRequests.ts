import { useCallback, useEffect, useState } from 'react'
import type { PullRequest } from '../types'
import { fetchMultipleRepos } from './github'
import { MOCK_PRS } from './mockData'

interface State {
  prs: PullRequest[]
  loading: boolean
  error: string | null
  isDemo: boolean
}

function parseRepoEnv(raw: string | undefined): Array<{ owner: string; name: string }> {
  if (!raw) return []
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const [owner, name] = s.split('/')
      return owner && name ? { owner, name } : null
    })
    .filter((r): r is { owner: string; name: string } => r !== null)
}

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string | undefined
const REPOS = parseRepoEnv(import.meta.env.VITE_REPOS as string | undefined)

/**
 * Loads PRs from GitHub when a token + repo list are configured.
 * Falls back to bundled demo data so the dashboard is useful out of the box.
 */
export function usePullRequests() {
  const [state, setState] = useState<State>({
    prs: [],
    loading: true,
    error: null,
    isDemo: false,
  })

  const load = useCallback(async () => {
    if (!TOKEN || REPOS.length === 0) {
      setState({ prs: MOCK_PRS, loading: false, error: null, isDemo: true })
      return
    }

    setState((s) => ({ ...s, loading: true, error: null }))
    try {
      const prs = await fetchMultipleRepos(REPOS, TOKEN)
      setState({ prs, loading: false, error: null, isDemo: false })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load pull requests'
      setState({ prs: [], loading: false, error: message, isDemo: false })
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  return { ...state, reload: load }
}
