import Box from '@mui/material/Box'
import classes from './AdminNotificationsContent.module.scss'

const AdminNotificationsContent = () => {
  return (
    <Box className={classes['notifications-content']}>
      <p>You currently have no unread notifications</p>
    </Box>
  )
}

export default AdminNotificationsContent
