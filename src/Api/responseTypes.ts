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
