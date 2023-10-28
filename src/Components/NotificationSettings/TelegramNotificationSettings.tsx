import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import NotificationSettingOptions from './NotificationSettingOptions'
import DeleteIcon from '@mui/icons-material/Delete'
import classes from './TelegramNotificationSettings.module.scss'

const TelegramNotificationSettings = () => {
  const [registrationId] = useState(null)

  return (
    <>
      {!registrationId && (
        <>
          <Typography>To activate telegram notifications do the following:</Typography>
          <List dense={true}>
            <ListItem>
              <ListItemText>1. Generate a registration ID below.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                2. Send this ID as text message to our bot metal_detector_notification_bot via your telegram app.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>3. Come back here again and reload the page.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                4. Finally you can configure which notifications you want to receive from the bot.
              </ListItemText>
            </ListItem>
          </List>
          <LoadingButton color="success" variant="outlined" type="submit" size="large">
            Generate registration ID
          </LoadingButton>
        </>
      )}
      {registrationId && (
        <>
          <NotificationSettingOptions />
          <LoadingButton color="error" variant="outlined" type="submit" size="large">
            <DeleteIcon className={classes['delete-icon']} />
            Delete configuration
          </LoadingButton>
        </>
      )}
    </>
  )
}

export default TelegramNotificationSettings
