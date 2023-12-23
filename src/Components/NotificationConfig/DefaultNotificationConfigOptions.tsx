import classes from './DfaultNotificationConfigOptions.module.scss'
import { FormControl, FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material'
import { DefaultNotificationConfig, NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import useFetchNotificationConfig from '../../Hooks/NotificationConfig/useFetchNotificationConfig'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import useUpdateNotificationConfig from '../../Hooks/NotificationConfig/useUpdateNotificationConfig'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

export type NotificationSettingOptionsProps = {
  channel: NotificationChannel
}

const DefaultNotificationConfigOptions = (props: NotificationSettingOptionsProps) => {
  const [frequencyInWeeks, setFrequencyInWeeks] = useState(0)
  const [notificationAtReleaseDate, setNotificationAtReleaseDate] = useState(false)
  const [notificationAtAnnouncementDate, setNotificationAtAnnouncementDate] = useState(false)
  const [notifyReissues, setNotifyReissues] = useState(false)
  const { notificationConfig, isLoading, error } = useFetchNotificationConfig({
    channel: props.channel,
  })
  const { mutate: updateNotificationConfig } = useUpdateNotificationConfig()

  useEffect(() => {
    if (notificationConfig) {
      setFrequencyInWeeks(notificationConfig.frequencyInWeeks)
      setNotificationAtReleaseDate(notificationConfig.notificationAtReleaseDate)
      setNotificationAtAnnouncementDate(notificationConfig.notificationAtAnnouncementDate)
      setNotifyReissues(notificationConfig.notifyReissues)
    }
  }, [notificationConfig])

  const handleUpdate = (newNotificationConfig: DefaultNotificationConfig) => {
    updateNotificationConfig(
      {
        channel: props.channel,
        ...newNotificationConfig!,
      },
      {
        onSuccess: () => {
          setFrequencyInWeeks(newNotificationConfig!.frequencyInWeeks)
          setNotificationAtReleaseDate(newNotificationConfig!.notificationAtReleaseDate)
          setNotificationAtAnnouncementDate(newNotificationConfig!.notificationAtAnnouncementDate)
          setNotifyReissues(newNotificationConfig!.notifyReissues)
        },
        onError: (error) => {
          toast.error(`Error saving notification config, please try again: ${(error as AxiosError).message}`)
        },
      },
    )
  }

  const handleFrequencyChange = (event: React.SyntheticEvent) => {
    const newFrequency = parseInt((event.target as HTMLInputElement).value)
    handleUpdate({
      frequencyInWeeks: newFrequency,
      notificationAtReleaseDate: notificationAtReleaseDate,
      notificationAtAnnouncementDate: notificationAtAnnouncementDate,
      notifyReissues: notifyReissues,
    })
  }

  const handleNotificationAtReleaseDateChange = (event: React.SyntheticEvent, checked: boolean) => {
    event.preventDefault()
    handleUpdate({
      frequencyInWeeks: frequencyInWeeks,
      notificationAtReleaseDate: checked,
      notificationAtAnnouncementDate: notificationAtAnnouncementDate,
      notifyReissues: notifyReissues,
    })
  }

  const handleNotificationAtAnnouncementDateChange = (event: React.SyntheticEvent, checked: boolean) => {
    event.preventDefault()
    handleUpdate({
      frequencyInWeeks: frequencyInWeeks,
      notificationAtReleaseDate: notificationAtReleaseDate,
      notificationAtAnnouncementDate: checked,
      notifyReissues: notifyReissues,
    })
  }

  const handleNotifyReissues = (event: React.SyntheticEvent, checked: boolean) => {
    event.preventDefault()
    handleUpdate({
      frequencyInWeeks: frequencyInWeeks,
      notificationAtReleaseDate: notificationAtReleaseDate,
      notificationAtAnnouncementDate: notificationAtReleaseDate,
      notifyReissues: checked,
    })
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {error && <ErrorAlert />}
      <>
        <div className={classes['notification-section']}>
          <h4 className={classes['notification-section__heading']}>Periodic notifications</h4>
          <RadioGroup value={frequencyInWeeks} onChange={(event) => handleFrequencyChange(event)}>
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
