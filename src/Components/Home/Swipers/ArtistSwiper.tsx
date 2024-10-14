import Heading from '../Heading/Heading'
import Swiper from '../../Common/Swiper/Swiper'
import { useEffect, useState } from 'react'
import { SwiperItemProps } from '../../Common/Swiper/SwiperItem'
import { Artist } from '@/Api/Model/Artist/Artist'

export type ArtistSwiperProps = {
  title: string
  artists: Artist[]
}

const ArtistSwiper = (props: ArtistSwiperProps) => {
  const [swiperItems, setSwiperItems] = useState<SwiperItemProps[]>([])

  useEffect(() => {
    setSwiperItems(
      props.artists.map((artist) => {
        return {
          id: `${artist.source}-${artist.externalId}`,
          title: artist.artistName,
          imageUrl: artist.smallImage,
          description: `${artist.follower} Follower`,
        }
      }),
    )
  }, [props.artists])

  return (
    <>
      <Heading headingTitle={props.title} />
      <Swiper items={swiperItems}></Swiper>
    </>
  )
}

export default ArtistSwiper
