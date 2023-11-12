import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import classes from './NotificationConfigAccordion.module.scss'
import DefaultNotificationConfigOptions from './DefaultNotificationConfigOptions'
import { NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import TelegramNotificationConfigOptions from './TelegramNotificationConfigOptions'

const NotificationConfigAccordion = () => {
  // const { updateNotificationConfig } = useUpdateNotificationConfig()

  // const doUpdateNotificationConfig = (channel: NotificationChannel, config: DefaultNotificationConfig) => {
  //   updateNotificationConfig({
  //     channel: channel,
  //     frequencyInWeeks: config.frequencyInWeeks,
  //     notificationAtReleaseDate: config.notificationAtReleaseDate,
  //     notificationAtAnnouncementDate: config.notificationAtAnnouncementDate,
  //     notifyReissues: config.notifyReissues,
  //   })
  // }

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
          <DefaultNotificationConfigOptions channel={NotificationChannel.EMAIL} />
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
          <TelegramNotificationConfigOptions channel={NotificationChannel.TELEGRAM} />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default NotificationConfigAccordion
