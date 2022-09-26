export interface MyArtistsResponse {
  readonly myArtists: Artist[]
  readonly pagination: BackendPagination
}

export interface Artist {
  readonly externalId: string
  readonly artistName: string
  readonly thumbnailImage: string
  readonly smallImage: string
  readonly mediumImage: string
  readonly largeImage: string
  readonly followedSince: string
  readonly source: string
  readonly follower: number
}

export interface BackendPagination {
  readonly currentPage: number
  readonly itemsPerPage: number
  readonly totalPages: number
}

export interface ErrorResponse {
  readonly timestamp: Date
  readonly status: number
  readonly error: string
  readonly messages: string[]
}

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
