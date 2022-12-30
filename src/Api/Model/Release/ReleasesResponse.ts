import { BackendPagination } from '../Common/BackendPagination'
import { Release } from './Release'

export type ReleasesResponse = {
  readonly items: Release[]
  readonly pagination: BackendPagination
}
