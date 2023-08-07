import { Avatar } from '@mui/material'
import classes from './UserNameCellRenderer.module.scss'

export type UserNameCellRendererProps = {
  username: string
  email: string
}

const UserNameCellRenderer = (props: UserNameCellRendererProps) => {
  return (
    <div className={classes['username-cell']}>
      <div>
        <Avatar className={classes['username-cell__avatar']}>{props.username.charAt(0).toUpperCase()}</Avatar>
      </div>
      <div>
        <p className={classes['username-cell__name']}>{props.username}</p>
        <p className={classes['username-cell__email']}>{props.email}</p>
      </div>
    </div>
  )
}

export default UserNameCellRenderer
