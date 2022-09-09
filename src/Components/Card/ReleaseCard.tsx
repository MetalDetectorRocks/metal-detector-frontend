import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import classes from '../Card/ReleaseCard.module.scss'
import Box from '@mui/material/Box'

export type ReleaseCardProps = {
  artist: string
  additionalArtists: string[]
  albumTitle: string
  releaseDate: string
  announcementDate: string
  genre: string
  type: string
  coverUrl: string
  reissue: boolean
}

const ReleaseCard = (props: ReleaseCardProps) => {
  return (
    <Card variant={'outlined'} className={classes['releaseCard']}>
      <CardMedia
        component={'img'}
        alt={'artist image'}
        image={props.coverUrl}
        className={classes['releaseCardMedia']}
      />
      <Box className={classes['cardContent']}>
        <CardHeader title={`${props.artist} - ${props.albumTitle}`} />
        <CardContent>
          <Typography variant={'h6'}>Release date</Typography>
          <Typography>{props.releaseDate}</Typography>
          <Typography variant={'h6'}>Genre</Typography>
          <Typography>{props.genre}</Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default ReleaseCard
