import { ItemsPerMonth } from './StatisticsResponse'

export type ArtistFollowingInfo = {
  readonly followingsPerMonth: ItemsPerMonth
  readonly totalFollowings: number
  readonly followingsThisMonth: number
}
