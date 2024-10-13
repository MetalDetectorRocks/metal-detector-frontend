import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import classes from './NotificationConfigAccordion.module.scss'
import DefaultNotificationConfigOptions from './DefaultNotificationConfigOptions'
import { NotificationChannel, NotificationConfig } from '@/Api/Model/NotificationConfig/NotificationConfig'
import TelegramNotificationConfigOptions from './TelegramNotificationConfigOptions'
import useFetchNotificationConfig from '../../Hooks/NotificationConfig/useFetchNotificationConfig'
import { AxiosError } from 'axios'

const NotificationConfigAccordion = () => {
  const notificationConfigQuery = useFetchNotificationConfig()

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
            notificationConfig={(notificationConfigQuery.data?.data as NotificationConfig)?.emailConfig}
            error={notificationConfigQuery.error as AxiosError}
            isLoading={notificationConfigQuery.isLoading}
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
            telegramNotificationConfig={(notificationConfigQuery.data?.data as NotificationConfig)?.telegramConfig}
            error={notificationConfigQuery.error as AxiosError}
            isLoading={notificationConfigQuery.isLoading}
          />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default NotificationConfigAccordion
