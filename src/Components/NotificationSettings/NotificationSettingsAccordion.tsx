import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import classes from './NotificationSettingsAccordion.module.scss'

const NotificationSettingsAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<KeyboardArrowDown />} className={classes['accordionSummery']}>
          <EmailIcon />
          <Typography>Email</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<KeyboardArrowDown />} className={classes['accordionSummery']}>
          <PhoneAndroidIcon />
          <Typography>Telegram</Typography>
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
