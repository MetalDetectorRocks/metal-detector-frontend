import { ReleaseState } from './ReleaseState'

export type Release = {
  readonly id: string
  readonly artist: string
  readonly additionalArtists: string[]
  readonly albumTitle: string
  readonly releaseDate: string
  readonly releaseDateAsDisplayString: string
  readonly announcementDate: string
  readonly estimatedReleaseDate: string
  readonly genre: string
  readonly type: string
  readonly artistDetailsUrl: string
  readonly releaseDetailsUrl: string
  readonly source: string
  readonly state: ReleaseState
  readonly coverUrl: string
  readonly reissue: boolean
}
