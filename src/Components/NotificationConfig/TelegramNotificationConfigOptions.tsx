import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React, { useState } from 'react'
import DefaultNotificationConfigOptions from './DefaultNotificationConfigOptions'
import DeleteIcon from '@mui/icons-material/Delete'
import classes from './TelegramNotificationConfig.module.scss'
import { DefaultNotificationConfig, NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import useGenerateRegistrationId from '../../Hooks/NotificationConfig/useGenerateRegistrationId'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import useDeleteTelegramConfig from '../../Hooks/NotificationConfig/useDeleteTelegramConfig'

export type TelegramNotificationSettingsProps = {
  channel: NotificationChannel
  notificationConfig: DefaultNotificationConfig
  isLoading: boolean
  error: AxiosError
}

const TelegramNotificationConfigOptions = (props: TelegramNotificationSettingsProps) => {
  const { mutate: generateRegistrationId } = useGenerateRegistrationId()
  const { mutate: deleteTelegramConfig } = useDeleteTelegramConfig()
  const [buttonText, setButtonText] = useState('Generate registration ID')
  const [shouldRender, setShouldRender] = useState(false)

  const handleGenerateRegistrationIdClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    generateRegistrationId({} as any, {
      onSuccess: (response: number) => {
        setButtonText(response.toString())
      },
      onError: (error) => {
        toast.error(`Error generating registration id, please try again: ${(error as AxiosError).message}`)
      },
    })
  }

  const handleDeleteTelegramConfig = (event: React.SyntheticEvent) => {
    event.preventDefault()
    deleteTelegramConfig({} as any, {
      onSuccess: () => {
        toast.info('Telegram configuration deleted successfully.')
        setShouldRender(!shouldRender)
      },
      onError: (error) => {
        toast.error(`Error deleting telegram config, please try again: ${(error as AxiosError).message}`)
      },
    })
  }

  return props.isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {props.error && <ErrorAlert />}
      {(!props.notificationConfig || shouldRender) && (
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
                4. Finally, you can configure which notifications you want to receive from the bot.
              </ListItemText>
            </ListItem>
          </List>
          <LoadingButton
            color="success"
            variant="outlined"
            type="submit"
            size="large"
            onClick={(event) => handleGenerateRegistrationIdClick(event)}
          >
            {buttonText}
          </LoadingButton>
        </>
      )}
      {props.notificationConfig && !shouldRender && (
        <>
          <DefaultNotificationConfigOptions
            channel={props.channel}
            notificationConfig={props.notificationConfig}
            isLoading={props.isLoading}
            error={props.error}
          />
          <LoadingButton
            color="error"
            variant="outlined"
            type="submit"
            size="large"
            onClick={(event) => handleDeleteTelegramConfig(event)}
          >
            <DeleteIcon className={classes['delete-icon']} />
            Delete configuration
          </LoadingButton>
        </>
      )}
    </>
  )
}

export default TelegramNotificationConfigOptions
