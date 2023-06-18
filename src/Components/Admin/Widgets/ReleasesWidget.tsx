import Widget from './Widget'
import SimpleAreaChart from '../../Common/Chart/SimpleAreaChart'
import { releasesPerMonth } from '../Mock/releasesWidget'
import { Grid } from '@mui/material'
import classes from './WidgetLabeledValue.module.scss'
import WidgetLabeledValue from './WidgetLabeledValue'

const UsersCountWidget = () => {
  return (
    <Widget title={'Releases'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={8}>
          <SimpleAreaChart
            id={'releases'}
            data={releasesPerMonth}
            areaDataKey={'count'}
            xAxisKey={'month'}
            color={'#00D7B4'}
          />
        </Grid>
        <Grid item xs={2} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={'2.123'} label={'total'} />
          <WidgetLabeledValue value={'345'} label={'current month'} />
        </Grid>
        <Grid item xs={2} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={'1.098'} label={'Upcoming'} />
          <WidgetLabeledValue value={'21'} label={'Duplicates'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default UsersCountWidget
