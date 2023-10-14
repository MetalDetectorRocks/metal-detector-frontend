import Heading from '../Heading/Heading'
import FeatureItemGrid from './FeatureItem/FeatureItemGrid'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'
import Spotify from '../../Common/Icon/Spotify'
import Vinyl from '../../Common/Icon/Vinyl'
import TelegramIcon from '@mui/icons-material/Telegram'
import EmailIcon from '@mui/icons-material/Email'
import { Grid } from '@mui/material'
import classes from './Features.module.scss'

const FeatureGrid = () => {
  return (
    <>
      <Heading headingTitle={'Features'} />
      <Grid container columns={12} className={classes['feature-grid']}>
        <FeatureItemGrid
          icon={<SearchIcon fontSize={'large'} />}
          text={'Search and follow your favorite bands to stay up to date when a new album is issued.'}
        />
        <FeatureItemGrid
          icon={<TuneIcon fontSize={'large'} />}
          text={
            'A release page with many filter options gives you a comprehensive overview of recent and upcoming albums.'
          }
        />
        <FeatureItemGrid
          icon={<Spotify fontSize={'large'} />}
          text={
            "Don't want to follow every band by hand? Easily sync your favorite bands that you already follow on Spotify."
          }
        />
        <FeatureItemGrid
          icon={<EmailIcon fontSize={'large'} />}
          text={'You will receive a notification via email when a new album is announced or released.'}
        />
        <FeatureItemGrid
          icon={<TelegramIcon fontSize={'large'} />}
          text={"You don't like emails? No problem, you can connect a Telegram bot with your metal detector account."}
        />
        <FeatureItemGrid
          icon={<Vinyl />}
          text={'Get an overview of which albums are eagerly awaited by our community.'}
        />
      </Grid>
    </>
  )
}

export default FeatureGrid
