import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import classes from './NotificationConfigAccordion.module.scss'
import DefaultNotificationConfigOptions from './DefaultNotificationConfigOptions'
import { NotificationConfig, NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import TelegramNotificationConfigOptions from './TelegramNotificationConfigOptions'
import useFetchNotificationConfig from '../../Hooks/NotificationConfig/useFetchNotificationConfig'
import { AxiosError } from 'axios'

const NotificationConfigAccordion = () => {
  const emailQuery = useFetchNotificationConfig({
    channel: NotificationChannel.EMAIL,
  })
  const telegramQuery = useFetchNotificationConfig({
    channel: NotificationChannel.TELEGRAM,
  })

  return (
    <>
      <Accordion disableGutters className={classes['accordion']}>
        <AccordionSummary
          expandIcon={<KeyboardArrowDown className={classes['accordion-expand-icon']} />}
          className={classes['accordion-summary']}
        >
          <div className={classes['accordion-summary-items']}>
            <EmailIcon />
            <Typography>Email</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <DefaultNotificationConfigOptions
            channel={NotificationChannel.EMAIL}
            notificationConfig={emailQuery.data?.data as NotificationConfig}
            error={emailQuery.error as AxiosError}
            isLoading={emailQuery.isLoading}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className={classes['accordion']}>
        <AccordionSummary
          expandIcon={<KeyboardArrowDown className={classes['accordion-expand-icon']} />}
          className={classes['accordion-summary']}
        >
          <div className={classes['accordion-summary-items']}>
            <PhoneAndroidIcon />
            <Typography>Telegram</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <TelegramNotificationConfigOptions
            channel={NotificationChannel.TELEGRAM}
            notificationConfig={telegramQuery.data?.data as NotificationConfig}
            error={telegramQuery.error as AxiosError}
            isLoading={telegramQuery.isLoading}
          />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default NotificationConfigAccordion
