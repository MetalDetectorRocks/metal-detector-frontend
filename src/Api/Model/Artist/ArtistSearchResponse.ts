import { BackendPagination } from '../Common/BackendPagination'
import { ArtistSearchResultEntry } from './ArtistSearchResultEntry'

export type ArtistSearchResponse = {
  readonly query: string
  readonly pagination: BackendPagination
  readonly searchResultsTitle: string
  readonly searchResults: ArtistSearchResultEntry[]
}
