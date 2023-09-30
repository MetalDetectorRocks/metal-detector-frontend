import { ReleaseState } from './ReleaseState'

export type Release = {
  readonly artist: string
  readonly additionalArtists: string[]
  readonly albumTitle: string
  readonly releaseDate: string
  readonly announcementDate: string
  readonly estimatedReleaseDate: string
  readonly genre: string
  readonly type: string
  readonly metalArchivesArtistUrl: string
  readonly metalArchivesAlbumUrl: string
  readonly source: string
  readonly state: ReleaseState
  readonly coverUrl: string
  readonly reissue: boolean
}
