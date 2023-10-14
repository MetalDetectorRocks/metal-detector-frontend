import 'swiper/scss'
import SwiperItem, { SwiperItemProps } from './SwiperItem'
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'
import classes from './Swiper.module.scss'
import SwiperNextButton from './SwiperNextButton'
import SwiperPrevButton from './SwiperPrevButton'

export type SwiperProps = {
  items: SwiperItemProps[]
}

const Swiper = (props: SwiperProps) => {
  return (
    <>
      <ReactSwiper
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        grabCursor={true}
        className={classes['swiper']}
      >
        <SwiperPrevButton />
        {props.items.map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperItem {...item}></SwiperItem>
          </SwiperSlide>
        ))}
        <SwiperNextButton />
      </ReactSwiper>
    </>
  )
}

export default Swiper
