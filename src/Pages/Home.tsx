import { useEffect } from 'react'
import FeatureGrid from '../Components/Home/Features/FeatureGrid'
import BlogPreview from '../Components/Home/Blog/BlogPreview'
import useFetchMostFollowedArtists from '@/Hooks/Artists/useFetchMostFollowedArtists'
import useFetchMostExpectedReleases from '@/Hooks/Releases/useFetchMostExpectedReleases'
import ArtistSwiper from '@/Components/Home/Swipers/ArtistSwiper'
import LoadingSpinner from '@/Components/Common/LoadingSpinner'
import ReleaseSwiper from '@/Components/Home/Swipers/ReleaseSwiper'

export const LandingPage = () => {
  const { artists, isLoading: isLoadingFetchArtists } = useFetchMostFollowedArtists()
  const { releases, isLoading: isLoadingFetchReleases } = useFetchMostExpectedReleases()

  useEffect(() => {
    document.title = 'Home | Metal Detector'
  }, [])

  return (
    <>
      <FeatureGrid />
      {isLoadingFetchArtists ? <LoadingSpinner /> : <ArtistSwiper title={'Most Followed Artists'} artists={artists} />}
      {isLoadingFetchReleases ? (
        <LoadingSpinner />
      ) : (
        <ReleaseSwiper title={'Most Expected Releases'} releases={releases} />
      )}
      <BlogPreview />
    </>
  )
}
