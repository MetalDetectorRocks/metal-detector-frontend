import { ItemsPerMonth } from './StatisticsResponse'

export type ReleaseInfo = {
  readonly releasesPerMonth: ItemsPerMonth[]
  readonly totalReleases: number
  readonly upcomingReleases: number
  readonly releasesThisMonth: number
  readonly duplicates: number
}
