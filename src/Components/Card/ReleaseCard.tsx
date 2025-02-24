import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import classes from '../Card/ReleaseCard.module.scss'
import Box from '@mui/material/Box'
import { Release } from '@/Api/Model/Release/Release'

export type ReleaseCardProps = {
  release: Release
  showAnnouncementDate: boolean
}

const ReleaseCard = (props: ReleaseCardProps) => {
  return (
    <Card variant={'outlined'} className={classes['release-card']}>
      <CardMedia
        component={'img'}
        alt={'artist image'}
        image={props.release.coverUrl}
        className={classes['release-card__media']}
      />
      <Box className={classes['release-card__content']}>
        <CardHeader title={`${props.release.artist} - ${props.release.albumTitle}`} />
        <CardContent>
          <Typography variant={'h6'}>Release date</Typography>
          <Typography>{props.release.releaseDate}</Typography>
          {props.showAnnouncementDate && (
            <>
              <Typography variant={'h6'}>Announcement date</Typography>
              <Typography>{props.release.announcementDate}</Typography>
            </>
          )}
          <Typography variant={'h6'}>Genre</Typography>
          <Typography>{props.release.genre}</Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default ReleaseCard
