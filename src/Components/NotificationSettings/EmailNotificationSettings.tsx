import { FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material'
import { styled } from '@mui/system'
import classes from './EmailNotificationSettings.module.scss'

const EmailNotificationSettings = () => {
  const StyledSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-track': {
      backgroundColor: 'white',
    },
  }))

  return (
    <>
      <h4 className={classes['notification-heading']}>Periodic notifications</h4>
      <RadioGroup defaultValue={'none'}>
        <FormControlLabel
          control={<Radio color={'info'} className={classes['radio-item']} />}
          label={'None'}
          value={'none'}
        />
        <FormControlLabel
          control={<Radio color={'info'} className={classes['radio-item']} />}
          label={'2-weekly'}
          value={'two'}
        />
        <FormControlLabel
          control={<Radio color={'info'} className={classes['radio-item']} />}
          label={'4-weekly'}
          value={'four'}
        />
      </RadioGroup>

      <h4 className={classes['notification-heading']}>Extra notifications</h4>
      <RadioGroup>
        <FormControlLabel control={<StyledSwitch color={'info'} />} label={'Notification on release date'} />
        <FormControlLabel control={<StyledSwitch color={'info'} />} label={'Notification on announcement date'} />
      </RadioGroup>

      <h4 className={classes['notification-heading']}>Reissue notifications</h4>
      <RadioGroup>
        <FormControlLabel
          control={<StyledSwitch color={'info'} />}
          label={'Notifications for reissues or re-releases'}
        />
      </RadioGroup>
    </>
  )
}

export default EmailNotificationSettings
