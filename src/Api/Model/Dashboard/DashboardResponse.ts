import { Artist } from '@/Api/Model/Artist/Artist'
import { Release } from '@/Api/Model/Release/Release'

export type DashboardResponse = {
  readonly upcomingReleases: Release[]
  readonly recentReleases: Release[]
  readonly mostExpectedReleases: Release[]
  readonly recentlyFollowedArtists: Artist[]
  readonly favoriteCommunityArtists: Artist[]
}
