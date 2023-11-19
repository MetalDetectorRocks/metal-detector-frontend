import classes from './DfaultNotificationConfigOptions.module.scss'
import { FormControl, FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material'
import { NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import useFetchNotificationConfig from '../../Hooks/NotificationConfig/useFetchNotificationConfig'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import useUpdateNotificationConfig from '../../Hooks/NotificationConfig/useUpdateNotificationConfig'

export type NotificationSettingOptionsProps = {
  channel: NotificationChannel
}

const DefaultNotificationConfigOptions = (props: NotificationSettingOptionsProps) => {
  const [frequencyInWeeks, setFrequencyInWeeks] = useState(0)
  const [notificationAtReleaseDate, setNotificationAtReleaseDate] = useState(false)
  const [notificationAtAnnouncementDate, setNotificationAtAnnouncementDate] = useState(false)
  const [notifyReissues, setNotifyReissues] = useState(false)
  const { notificationConfig, fetchIsLoading, fetchError } = useFetchNotificationConfig({
    channel: props.channel,
  })
  const { updateNotificationConfig, updateError } = useUpdateNotificationConfig()

  useEffect(() => {
    if (notificationConfig) {
      setFrequencyInWeeks(notificationConfig.frequencyInWeeks)
      setNotificationAtReleaseDate(notificationConfig.notificationAtReleaseDate)
      setNotificationAtAnnouncementDate(notificationConfig.notificationAtAnnouncementDate)
      setNotifyReissues(notificationConfig.notifyReissues)
    }
  }, [notificationConfig])

  useEffect(() => {
    updateNotificationConfig({
      channel: props.channel,
      frequencyInWeeks: frequencyInWeeks,
      notificationAtReleaseDate: notificationAtReleaseDate,
      notificationAtAnnouncementDate: notificationAtAnnouncementDate,
      notifyReissues: notifyReissues,
    })
  }, [frequencyInWeeks, notificationAtReleaseDate, notificationAtAnnouncementDate, notifyReissues])

  const handleFrequencyChange = (event: React.SyntheticEvent) => {
    const newFrequency = parseInt((event.target as HTMLInputElement).value)
    setFrequencyInWeeks(newFrequency)
  }

  const handleNotificationAtReleaseDateChange = (_event: React.SyntheticEvent, checked: boolean) => {
    setNotificationAtReleaseDate(checked)
  }

  const handleNotificationAtAnnouncementDateChange = (_event: React.SyntheticEvent, checked: boolean) => {
    setNotificationAtAnnouncementDate(checked)
  }

  const handleNotifyReissues = (_event: React.SyntheticEvent, checked: boolean) => {
    setNotifyReissues(checked)
  }

  return (
    <>
      {fetchIsLoading && <LoadingSpinner />}
      {(fetchError || updateError) && <ErrorAlert />}
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
              control={<Switch color={'info'} checked={notificationAtReleaseDate} />}
              label={'Notification on release date'}
              onChange={handleNotificationAtReleaseDateChange}
            />
            <FormControlLabel
              control={<Switch color={'info'} checked={notificationAtAnnouncementDate} />}
              label={'Notification on announcement date'}
              onChange={handleNotificationAtAnnouncementDateChange}
            />
          </FormControl>
        </div>
        <div className={classes['notification-section']}>
          <h4 className={classes['notification-section__heading']}>Reissue notifications</h4>
          <FormControl>
            <FormControlLabel
              control={<Switch color={'info'} checked={notifyReissues} />}
              label={'Notifications for reissues or re-releases'}
              onChange={handleNotifyReissues}
            />
          </FormControl>
        </div>
      </>
    </>
  )
}

export default DefaultNotificationConfigOptions
