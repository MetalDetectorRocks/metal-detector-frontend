import { useSwiper } from 'swiper/react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Box from '@mui/material/Box'
import classes from './Swiper.module.scss'

const SwiperNextButton = () => {
  const swiper = useSwiper()
  return (
    <Box component={'div'} className={classes['swiper-next']}>
      <ChevronRightIcon fontSize={'large'} onClick={() => swiper.slideNext()}></ChevronRightIcon>
    </Box>
  )
}

export default SwiperNextButton
