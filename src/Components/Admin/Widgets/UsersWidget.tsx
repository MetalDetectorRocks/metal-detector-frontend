import Widget from './Widget'
import SimpleAreaChart from '../../Common/Chart/SimpleAreaChart'
import { usersPerMonth } from '../Mock/usersWidget'
import { Grid } from '@mui/material'
import WidgetLabeledValue from './WidgetLabeledValue'
import classes from './WidgetLabeledValue.module.scss'

const UsersWidget = () => {
  return (
    <Widget title={'Users'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={9}>
          <SimpleAreaChart
            id={'users'}
            data={usersPerMonth}
            areaDataKey={'count'}
            xAxisKey={'month'}
            color={'#1F8EF1'}
          />
        </Grid>
        <Grid item xs={3} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={'38'} label={'total'} />
          <WidgetLabeledValue value={'4'} label={'current month'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default UsersWidget
