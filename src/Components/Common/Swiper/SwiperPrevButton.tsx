import classes from './Swiper.module.scss'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useSwiper } from 'swiper/react'
import Box from '@mui/material/Box'

const SwiperPrevButton = () => {
  const swiper = useSwiper()
  return (
    <Box component={'div'} className={classes['swiper-prev']}>
      <ChevronLeftIcon fontSize={'large'} onClick={() => swiper.slidePrev()}></ChevronLeftIcon>
    </Box>
  )
}

export default SwiperPrevButton
