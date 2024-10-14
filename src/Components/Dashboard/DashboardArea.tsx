import useFetchDashboard from '@/Hooks/useFetchDashboard'
import LoadingSpinner from '@/Components/Common/LoadingSpinner'
import ReleaseSwiper from '@/Components/Home/Swipers/ReleaseSwiper'
import ArtistSwiper from '@/Components/Home/Swipers/ArtistSwiper'
import ErrorAlert from '@/Components/Common/ErrorAlert'

const DashboardArea = () => {
  const {
    upcomingReleases,
    recentReleases,
    mostExpectedReleases,
    recentlyFollowedArtists,
    favoriteCommunityArtists,
    isLoading,
    error,
  } = useFetchDashboard()

  return (
    <>
      {error && <ErrorAlert />}
      {isLoading ? <LoadingSpinner /> : <ReleaseSwiper title={'Your upcoming releases'} releases={upcomingReleases} />}
      {isLoading ? <LoadingSpinner /> : <ReleaseSwiper title={'Recent releases'} releases={recentReleases} />}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ArtistSwiper title={'Your recently followed artists'} artists={recentlyFollowedArtists} />
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ArtistSwiper title={"The community's favorite artists"} artists={favoriteCommunityArtists} />
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ReleaseSwiper title={"The community's most expected releases"} releases={mostExpectedReleases} />
      )}
    </>
  )
}

export default DashboardArea
