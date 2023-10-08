import Heading from '../Heading/Heading'
import { useEffect, useState } from 'react'
import { SwiperItemProps } from '../../Common/Swiper/SwiperItem'
import useFetchMostExpectedReleases from '../../../Hooks/Releases/useFetchMostExpectedReleases'
import Swiper from '../../Common/Swiper/Swiper'
import { formatRelativeInDays } from '../../../Utils/DayJsUtils'

const MostExpectedReleasesSwiper = () => {
  const [swiperItems, setSwiperItems] = useState<SwiperItemProps[]>([])
  const { releases, isSuccess } = useFetchMostExpectedReleases()

  useEffect(() => {
    if (isSuccess) {
      const items: SwiperItemProps[] = []
      releases?.forEach((release) => {
        items.push({
          id: release.id,
          title: release.artist,
          subtitle: release.albumTitle,
          imageUrl: release.coverUrl,
          description: formatRelativeInDays(release.releaseDate),
          descriptionTooltip: release.releaseDateAsDisplayString,
        })
      })
      setSwiperItems(items)
    }
  }, [releases])
  return (
    <>
      <Heading headingTitle={'Most Expected Releases'} />
      <Swiper items={swiperItems}></Swiper>
    </>
  )
}

export default MostExpectedReleasesSwiper
