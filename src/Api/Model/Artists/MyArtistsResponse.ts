import { Artist } from './Artist'
import { BackendPagination } from '../BackendPagination'

export type MyArtistsResponse = {
  readonly myArtists: Artist[]
  readonly pagination: BackendPagination
}
