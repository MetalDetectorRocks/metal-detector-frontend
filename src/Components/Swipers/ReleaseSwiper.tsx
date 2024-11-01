import Heading from '../Home/Heading/Heading'
import { useEffect, useState } from 'react'
import { SwiperItemProps } from '../Common/Swiper/SwiperItem'
import Swiper from '../Common/Swiper/Swiper'
import { formatRelativeInDays } from '@/Utils/DayJsUtils'
import { Release } from '@/Api/Model/Release/Release'

export type ReleaseSwiperProps = {
  title: string
  releases: Release[]
}

const ReleaseSwiper = (props: ReleaseSwiperProps) => {
  const [swiperItems, setSwiperItems] = useState<SwiperItemProps[]>([])

  useEffect(() => {
    setSwiperItems(
      props.releases.map((release) => {
        return {
          id: release.id,
          title: release.artist,
          subtitle: release.albumTitle,
          imageUrl: release.coverUrl,
          description: formatRelativeInDays(release.releaseDate),
          descriptionTooltip: release.releaseDateAsDisplayString,
        }
      }),
    )
  }, [props.releases])
  return (
    <>
      <Heading headingTitle={props.title} />
      <Swiper items={swiperItems}></Swiper>
    </>
  )
}

export default ReleaseSwiper
