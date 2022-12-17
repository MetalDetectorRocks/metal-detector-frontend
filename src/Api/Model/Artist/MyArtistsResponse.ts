import { Artist } from './Artist'
import { BackendPagination } from '../Common/BackendPagination'

export type MyArtistsResponse = {
  readonly myArtists: Artist[]
  readonly pagination: BackendPagination
}
