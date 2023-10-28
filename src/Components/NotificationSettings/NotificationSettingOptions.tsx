import classes from './NotificationSettingOptions.module.scss'
import { FormControlLabel, Radio, RadioGroup, Switch } from '@mui/material'
import { styled } from '@mui/system'

const NotificationSettingOptions = () => {
  const StyledSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-track': {
      backgroundColor: 'white',
    },
  }))

  return (
    <>
      <div className={classes['notification-section']}>
        <h4 className={classes['notification-section__heading']}>Periodic notifications</h4>
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
      </div>
      <div className={classes['notification-section']}>
        <h4 className={classes['notification-section__heading']}>Extra notifications</h4>
        <RadioGroup>
          <FormControlLabel control={<StyledSwitch color={'info'} />} label={'Notification on release date'} />
          <FormControlLabel control={<StyledSwitch color={'info'} />} label={'Notification on announcement date'} />
        </RadioGroup>
      </div>
      <div className={classes['notification-section']}>
        <h4 className={classes['notification-section__heading']}>Reissue notifications</h4>
        <RadioGroup>
          <FormControlLabel
            control={<StyledSwitch color={'info'} />}
            label={'Notifications for reissues or re-releases'}
          />
        </RadioGroup>
      </div>
    </>
  )
}

export default NotificationSettingOptions
