import classes from './Swiper.module.scss'
import Box from '@mui/material/Box'
import { Tooltip } from '@mui/material'

export type SwiperItemProps = {
  id: string
  title: string
  imageUrl: string
  subtitle?: string
  description?: string
  descriptionTooltip?: string
}

const SwiperItem = (props: SwiperItemProps) => {
  return (
    <Box component={'div'} className={classes['swiper-item']}>
      <img className={classes['swiper-item__image']} src={props.imageUrl} alt={props.title} />
      <h3 className={classes['swiper-item__title']}>{props.title}</h3>
      {props.subtitle && (
        <Box component={'div'}>
          <span className={classes['swiper-item__subtitle']}>{props.subtitle}</span>
        </Box>
      )}
      {props.description && (
        <Box component={'div'}>
          <Tooltip title={props.descriptionTooltip} arrow disableFocusListener>
            <span className={classes['swiper-item__description']}>{props.description}</span>
          </Tooltip>
        </Box>
      )}
    </Box>
  )
}

export default SwiperItem
