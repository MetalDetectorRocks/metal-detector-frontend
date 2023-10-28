import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import classes from './NotificationSettingsAccordion.module.scss'
import EmailNotificationSettings from './EmailNotificationSettings'

const NotificationSettingsAccordion = () => {
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
          <EmailNotificationSettings />
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default NotificationSettingsAccordion
