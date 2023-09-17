import { ArtistFollowingInfo } from './ArtistFollowingInfo'
import { UserInfo } from './UserInfo'
import { ReleaseInfo } from './ReleaseInfo'
import { ImportInfo } from './ImportInfo'

export type StatisticsResponse = {
  readonly userInfo: UserInfo
  readonly artistFollowingInfo: ArtistFollowingInfo
  readonly releaseInfo: ReleaseInfo
  readonly importInfo: ImportInfo[]
}

export type ItemsPerMonth = {
  readonly yearMonth: string
  readonly count: number
}
