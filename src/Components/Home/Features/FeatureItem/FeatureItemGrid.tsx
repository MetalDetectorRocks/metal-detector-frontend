import * as React from 'react'
import Box from '@mui/material/Box'
import classes from './FeatureItem.module.scss'
import { Grid } from '@mui/material'

export type FeatureItemProps = {
  icon: React.ReactNode
  text: string
}

const FeatureItemGrid = (props: FeatureItemProps) => {
  return (
    <Grid xs={12} sm={6} md={4} item={true} display="flex" justifyContent="center" alignItems="top">
      <Box className={classes['feature-item']}>
        <Box className={classes['feature-item__icon-background']}>
          <Box className={classes['feature-item__icon']}>{props.icon}</Box>
        </Box>
        <p className={classes['feature-item__text']}>{props.text}</p>
      </Box>
    </Grid>
  )
}

export default FeatureItemGrid
