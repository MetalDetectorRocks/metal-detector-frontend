import { BackendPagination } from './Model/BackendPagination'

export interface ReleasesResponse {
  readonly items: Release[]
  readonly pagination: BackendPagination
}

export interface Release {
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
  readonly state: string
  readonly coverUrl: string
  readonly reissue: boolean
}
