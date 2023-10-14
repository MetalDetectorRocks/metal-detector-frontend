import Widget from './Widget'
import SimpleAreaChart from '../../Common/Chart/SimpleAreaChart'
import { Grid } from '@mui/material'
import classes from './WidgetLabeledValue.module.scss'
import WidgetLabeledValue from './WidgetLabeledValue'
import { ArtistFollowingInfo } from '../../../Api/Model/Statistics/ArtistFollowingInfo'
import { mapData } from './MapData'

export type ArtistFollowingsWidgetProps = {
  artistFollowingInfo?: ArtistFollowingInfo
}

const ArtistFollowingsWidget = (props: ArtistFollowingsWidgetProps) => {
  return (
    <Widget title={'Artist followings'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={9}>
          <SimpleAreaChart
            id={'artistFollowings'}
            data={mapData(props.artistFollowingInfo?.followingsPerMonth)}
            areaDataKey={'count'}
            xAxisKey={'yearMonth'}
            color={'#D049B7'}
          />
        </Grid>
        <Grid item xs={3} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={`${props.artistFollowingInfo?.totalFollowings}`} label={'total'} />
          <WidgetLabeledValue value={`${props.artistFollowingInfo?.followingsThisMonth}`} label={'current month'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default ArtistFollowingsWidget
