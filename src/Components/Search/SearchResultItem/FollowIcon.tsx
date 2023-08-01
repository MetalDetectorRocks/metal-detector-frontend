import IconButton from '@mui/material/IconButton'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd'
import useFollowArtist from '../../../Hooks/Artists/useFollowArtist'
import { useEffect, useState } from 'react'
import useUser from '../../../Hooks/Auth/useUser'
import { toast } from 'react-toastify'

export type FollowIconProps = {
  followed: boolean
  source: string
  externalId: string
}

const FollowIcon = (props: FollowIconProps) => {
  const { isAuthenticated } = useUser()
  const { followArtist, isSuccess } = useFollowArtist()
  const [followed, setFollowed] = useState(props.followed)

  useEffect(() => {
    if (isSuccess) {
      setFollowed(!followed)
    }
  }, [isSuccess])

  const followOrUnfollow = (type: 'FOLLOW' | 'UNFOLLOW') => {
    if (!isAuthenticated) {
      toast.info('Please sign in to follow artists.')
    } else {
      followArtist({
        source: props.source.toUpperCase(),
        externalId: props.externalId,
        type,
      })
    }
  }

  return (
    <>
      {followed ? (
        <IconButton aria-label="unfollow" color={'secondary'} onClick={() => followOrUnfollow('UNFOLLOW')}>
          <NotificationsActiveIcon />
        </IconButton>
      ) : (
        <IconButton aria-label="follow" color={'secondary'} onClick={() => followOrUnfollow('FOLLOW')}>
          <NotificationAddIcon />
        </IconButton>
      )}
    </>
  )
}

export default FollowIcon
