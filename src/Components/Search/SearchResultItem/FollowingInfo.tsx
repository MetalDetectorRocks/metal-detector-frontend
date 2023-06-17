import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import classes from './SearchResultItem.module.scss'

export type FollowingInfoProps = {
  follower: number
}

const FollowingInfo = (props: FollowingInfoProps) => {
  const [followingInfo, setFollowingInfo] = useState('')

  useEffect(() => {
    if (props.follower === 0) {
      setFollowingInfo('Not followed by any user')
    } else if (props.follower === 1) {
      setFollowingInfo('Followed by 1 user')
    } else if (props.follower > 1) {
      setFollowingInfo(`Followed by ${props.follower} users`)
    }
  }, [])

  return (
    <Box>
      <p className={classes['search-result-item__following-info']}>{followingInfo}</p>
    </Box>
  )
}

export default FollowingInfo
