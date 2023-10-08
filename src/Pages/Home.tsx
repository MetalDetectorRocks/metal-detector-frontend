import { useEffect } from 'react'
import FeatureGrid from '../Components/Home/Features/FeatureGrid'
import MostFollowedArtistsSwiper from '../Components/Home/Swipers/MostFollowedArtistsSwiper'
import MostExpectedReleasesSwiper from '../Components/Home/Swipers/MostExpectedReleasesSwiper'
import BlogPreview from '../Components/Home/Blog/BlogPreview'

export const LandingPage = () => {
  useEffect(() => {
    document.title = 'Home | Metal Detector'
  }, [])

  return (
    <>
      <FeatureGrid />
      <MostFollowedArtistsSwiper />
      <MostExpectedReleasesSwiper />
      <BlogPreview />
    </>
  )
}
