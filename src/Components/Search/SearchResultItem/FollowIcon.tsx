import IconButton from '@mui/material/IconButton'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd'

export type FollowIconProps = {
  followed: boolean
}

const FollowIcon = (props: FollowIconProps) => {
  // TODO DanielW: Handle follow and unfollow in later PR
  return (
    <>
      {props.followed ? (
        <IconButton aria-label="unfollow" color={'secondary'}>
          <NotificationsActiveIcon />
        </IconButton>
      ) : (
        <IconButton aria-label="follow" color={'secondary'}>
          <NotificationAddIcon />
        </IconButton>
      )}
    </>
  )
}

export default FollowIcon
