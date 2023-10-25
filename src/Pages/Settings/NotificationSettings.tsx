import { useEffect } from 'react'
import classes from '../../Components/AccountDetails/AccountDetails.module.scss'
import Box from '@mui/material/Box'
import NotificationSettingsAccordion from '../../Components/NotificationSettings/NotificationSettingsAccordion'

export const NotificationSettings = () => {
  useEffect(() => {
    document.title = 'Notification Settings | Metal Detector'
  }, [])
  return (
    <>
      <Box className={classes['section']}>
        <h1>Notification Settings</h1>
        <p>
          You can receive notifications about current or upcoming releases at a frequency of two or four weeks. These
          notifications are always sent on Sundays. It is also possible to be notified on the release date or the day a
          new release is announced.
        </p>
        <p>All you need to do is configuring your preferred channels.</p>
        <NotificationSettingsAccordion />
      </Box>
    </>
  )
}
