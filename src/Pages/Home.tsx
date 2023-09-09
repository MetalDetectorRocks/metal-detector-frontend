import { useEffect } from 'react'
import FeatureGrid from '../Components/Home/Features/FeatureGrid'
import MostFollowedArtists from '../Components/Home/Carousels/MostFollowedArtists'
import MostExpectedReleases from '../Components/Home/Carousels/MostExpectedReleases'
import BlogPreview from '../Components/Home/Blog/BlogPreview'

export const LandingPage = () => {
  useEffect(() => {
    document.title = 'Home | Metal Detector'
  }, [])

  return (
    <>
      <FeatureGrid />
      <MostFollowedArtists />
      <MostExpectedReleases />
      <BlogPreview />
    </>
  )
}
