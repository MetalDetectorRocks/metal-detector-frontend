import { useEffect } from 'react'
import FeatureGrid from '../Components/Home/Features/FeatureGrid'
import BlogPreview from '../Components/Home/Blog/BlogPreview'
import useFetchMostFollowedArtists from '@/Hooks/Artists/useFetchMostFollowedArtists'
import useFetchMostExpectedReleases from '@/Hooks/Releases/useFetchMostExpectedReleases'
import ArtistSwiper from '@/Components/Swipers/ArtistSwiper'
import LoadingSpinner from '@/Components/Common/LoadingSpinner'
import ReleaseSwiper from '@/Components/Swipers/ReleaseSwiper'
import WhoWeAre from '@/Components/Home/We/WhoWeAre'

export const LandingPage = () => {
  const { artists, isLoading: isLoadingFetchArtists } = useFetchMostFollowedArtists()
  const { releases, isLoading: isLoadingFetchReleases } = useFetchMostExpectedReleases()

  useEffect(() => {
    document.title = 'Home | Metal Detector'
  }, [])

  return (
    <>
      <FeatureGrid />
      {isLoadingFetchArtists ? (
        <LoadingSpinner />
      ) : (
        <ArtistSwiper title={'Most Followed Artists'} artists={artists} displayFollower={true} />
      )}
      {isLoadingFetchReleases ? (
        <LoadingSpinner />
      ) : (
        <ReleaseSwiper title={'Most Expected Releases'} releases={releases} />
      )}
      <BlogPreview />
      <WhoWeAre />
    </>
  )
}
