import Heading from '../Heading/Heading'
import Swiper from '../../Common/Swiper/Swiper'
import { useEffect, useState } from 'react'
import { SwiperItemProps } from '../../Common/Swiper/SwiperItem'
import { Artist } from '@/Api/Model/Artist/Artist'
import { formatRelativeInDays } from '@/Utils/DayJsUtils'

export type ArtistSwiperProps = {
  title: string
  artists: Artist[]
  displayFollower: boolean
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
          description: props.displayFollower
            ? `${artist.follower} Follower`
            : formatRelativeInDays(artist.followedSince),
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
