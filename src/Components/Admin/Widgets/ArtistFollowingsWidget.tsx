import Widget from './Widget'
import SimpleAreaChart from '../../Common/Chart/SimpleAreaChart'
import { artistFollowingsPerMonth } from '../Mock/artistFollowingsWidget'
import { Grid } from '@mui/material'
import classes from './WidgetLabeledValue.module.scss'
import WidgetLabeledValue from './WidgetLabeledValue'

const ArtistFollowingsWidget = () => {
  return (
    <Widget title={'Artist followings'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={9}>
          <SimpleAreaChart
            id={'artistFollowings'}
            data={artistFollowingsPerMonth}
            areaDataKey={'count'}
            xAxisKey={'month'}
            color={'#D049B7'}
          />
        </Grid>
        <Grid item xs={3} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={'4.321'} label={'total'} />
          <WidgetLabeledValue value={'75'} label={'current month'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default ArtistFollowingsWidget
