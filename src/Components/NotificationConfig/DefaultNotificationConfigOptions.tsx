import classes from './DfaultNotificationConfigOptions.module.scss'
import { FormControl, FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material'
import { NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import useFetchNotificationConfig from '../../Hooks/NotificationConfig/useFetchNotificationConfig'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'

export type NotificationSettingOptionsProps = {
  channel: NotificationChannel
}

const DefaultNotificationConfigOptions = (props: NotificationSettingOptionsProps) => {
  const [frequencyInWeeks, setFrequencyInWeeks] = useState(0)
  const [notificationAtReleaseDate, setNotificationAtReleaseDate] = useState(false)
  const [notificationAtAnnouncementDate, setNotificationAtAnnouncementDate] = useState(false)
  const [notifyReissues, setNotifyReissues] = useState(false)
  const { notificationConfig, isLoading, error } = useFetchNotificationConfig({ channel: props.channel })

  useEffect(() => {
    if (notificationConfig) {
      setFrequencyInWeeks(notificationConfig.frequencyInWeeks)
      setNotificationAtReleaseDate(notificationConfig.notificationAtReleaseDate)
      setNotificationAtAnnouncementDate(notificationConfig.notificationAtAnnouncementDate)
      setNotifyReissues(notificationConfig.notifyReissues)
    }
  }, [notificationConfig])

  const handleFrequencyChange = (event: React.SyntheticEvent) => {
    setFrequencyInWeeks(parseInt((event.target as HTMLInputElement).value))
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorAlert />}
      <>
        <div className={classes['notification-section']}>
          <h4 className={classes['notification-section__heading']}>Periodic notifications</h4>
          <RadioGroup value={frequencyInWeeks} onChange={handleFrequencyChange}>
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
              control={<Switch color={'info'} value={notificationAtReleaseDate ? 'on' : 'off'} />}
              label={'Notification on release date'}
            />
            <FormControlLabel
              control={<Switch color={'info'} value={notificationAtAnnouncementDate ? 'on' : 'off'} />}
              label={'Notification on announcement date'}
            />
          </FormControl>
        </div>
        <div className={classes['notification-section']}>
          <h4 className={classes['notification-section__heading']}>Reissue notifications</h4>
          <FormControl>
            <FormControlLabel
              control={<Switch color={'info'} value={notifyReissues ? 'on' : 'off'} />}
              label={'Notifications for reissues or re-releases'}
            />
          </FormControl>
        </div>
      </>
    </>
  )
}

export default DefaultNotificationConfigOptions
