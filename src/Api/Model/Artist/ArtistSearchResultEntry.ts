export type ArtistSearchResultEntry = {
  readonly id: string
  readonly name: string
  readonly uri: string
  readonly source: string
  readonly followed: boolean
  readonly genres: string[]
  readonly popularity: number
  readonly metalDetectorFollower: number
  readonly spotifyFollower: number
  readonly thumbnailImage: string
  readonly smallImage: string
  readonly mediumImage: string
  readonly largeImage: string
}
