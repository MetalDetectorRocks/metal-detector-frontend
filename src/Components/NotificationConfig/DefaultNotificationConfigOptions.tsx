import classes from './DfaultNotificationConfigOptions.module.scss'
import { FormControl, FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material'
import { styled } from '@mui/system'
import { NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import useFetchNotificationConfig from '../../Hooks/NotificationConfig/useFetchNotificationConfig'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'

export type NotificationSettingOptionsProps = {
  channel: NotificationChannel
}

const DefaultNotificationConfigOptions = (props: NotificationSettingOptionsProps) => {
  const { notificationConfig, isLoading, error } = useFetchNotificationConfig({ channel: props.channel })
  const StyledSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-track': {
      backgroundColor: 'white',
    },
  }))

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorAlert />}
      <>
        <div className={classes['notification-section']}>
          <h4 className={classes['notification-section__heading']}>Periodic notifications</h4>
          <RadioGroup defaultValue={0} value={notificationConfig?.frequencyInWeeks || 0}>
            <FormControlLabel
              control={<Radio color={'info'} className={classes['radio-item']} />}
              label={'None'}
              value={0}
            />
            <FormControlLabel
              control={<Radio color={'info'} className={classes['radio-item']} />}
              label={'2-weekly'}
              value={2}
            />
            <FormControlLabel
              control={<Radio color={'info'} className={classes['radio-item']} />}
              label={'4-weekly'}
              value={4}
            />
          </RadioGroup>
        </div>
        <div className={classes['notification-section']}>
          <h4 className={classes['notification-section__heading']}>Extra notifications</h4>
          <FormControl>
            <FormControlLabel
              control={
                <StyledSwitch color={'info'} value={notificationConfig?.notificationAtReleaseDate ? 'on' : 'off'} />
              }
              label={'Notification on release date'}
            />
            <FormControlLabel
              control={
                <StyledSwitch
                  color={'info'}
                  value={notificationConfig?.notificationAtAnnouncementDate ? 'on' : 'off'}
                />
              }
              label={'Notification on announcement date'}
            />
          </FormControl>
        </div>
        <div className={classes['notification-section']}>
          <h4 className={classes['notification-section__heading']}>Reissue notifications</h4>
          <FormControl>
            <FormControlLabel
              control={<StyledSwitch color={'info'} value={notificationConfig?.notifyReissues ? 'on' : 'off'} />}
              label={'Notifications for reissues or re-releases'}
            />
          </FormControl>
        </div>
      </>
    </>
  )
}

export default DefaultNotificationConfigOptions
