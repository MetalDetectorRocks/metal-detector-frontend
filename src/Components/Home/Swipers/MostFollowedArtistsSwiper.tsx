import Heading from '../Heading/Heading'
import Swiper from '../../Common/Swiper/Swiper'
import useFetchMostFollowedArtists from '../../../Hooks/Artists/useFetchMostFollowedArtists'
import { useEffect, useState } from 'react'
import { SwiperItemProps } from '../../Common/Swiper/SwiperItem'

const MostFollowedArtistsSwiper = () => {
  const [swiperItems, setSwiperItems] = useState<SwiperItemProps[]>([])
  const { artists, isSuccess } = useFetchMostFollowedArtists()

  useEffect(() => {
    if (isSuccess) {
      setSwiperItems(
        artists!.map((artist) => {
          return {
            id: `${artist.source}-${artist.externalId}`,
            title: artist.artistName,
            imageUrl: artist.smallImage,
            description: `${artist.follower} Follower`,
          }
        }),
      )
    }
  }, [artists])

  return (
    <>
      <Heading headingTitle={'Most Followed Artists'} />
      <Swiper items={swiperItems}></Swiper>
    </>
  )
}

export default MostFollowedArtistsSwiper
