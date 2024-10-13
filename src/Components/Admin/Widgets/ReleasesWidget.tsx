import Widget from './Widget'
import SimpleAreaChart from '../../Common/Chart/SimpleAreaChart'
import { Grid } from '@mui/material'
import classes from './WidgetLabeledValue.module.scss'
import WidgetLabeledValue from './WidgetLabeledValue'
import { ReleaseInfo } from '@/Api/Model/Statistics/ReleaseInfo'
import { mapData } from './MapData'

export type ReleasesWidgetProps = {
  releaseInfo?: ReleaseInfo
}

const ReleasesWidget = (props: ReleasesWidgetProps) => {
  return (
    <Widget title={'Releases'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={8}>
          <SimpleAreaChart
            id={'releases'}
            data={mapData(props.releaseInfo?.releasesPerMonth)}
            areaDataKey={'count'}
            xAxisKey={'yearMonth'}
            color={'#00D7B4'}
          />
        </Grid>
        <Grid item xs={2} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={`${props.releaseInfo?.totalReleases}`} label={'total'} />
          <WidgetLabeledValue value={`${props.releaseInfo?.releasesThisMonth}`} label={'current month'} />
        </Grid>
        <Grid item xs={2} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={`${props.releaseInfo?.upcomingReleases}`} label={'Upcoming'} />
          <WidgetLabeledValue value={`${props.releaseInfo?.duplicates}`} label={'Duplicates'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default ReleasesWidget
