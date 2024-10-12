import Widget from './Widget'
import SimpleAreaChart from '../../Common/Chart/SimpleAreaChart'
import { Grid } from '@mui/material'
import WidgetLabeledValue from './WidgetLabeledValue'
import classes from './WidgetLabeledValue.module.scss'
import { UserInfo } from '@/Api/Model/Statistics/UserInfo'
import { mapData } from './MapData'

export type UsersWidgetProps = {
  userInfo?: UserInfo
}

const UsersWidget = (props: UsersWidgetProps) => {
  return (
    <Widget title={'Users'}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={9}>
          <SimpleAreaChart
            id={'users'}
            data={mapData(props.userInfo?.usersPerMonth)}
            areaDataKey={'count'}
            xAxisKey={'yearMonth'}
            color={'#1F8EF1'}
          />
        </Grid>
        <Grid item xs={3} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={`${props.userInfo?.totalUsers}`} label={'total'} />
          <WidgetLabeledValue value={`${props.userInfo?.newThisMonth}`} label={'current month'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default UsersWidget
