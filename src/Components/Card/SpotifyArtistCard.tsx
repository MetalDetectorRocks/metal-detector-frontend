import { Card, CardContent, CardHeader, CardMedia, Chip, Typography } from '@mui/material'
import classes from './SpotifyArtistCard.module.scss'

export type SpotifyArtistCardProps = {
  name: string
  followedSince: string
  image: string
  genres: string[]
  followers: number
}

const numberFormatter = new Intl.NumberFormat('en-us', { minimumFractionDigits: 0 })

const SpotifyArtistCard = (props: SpotifyArtistCardProps) => {
  return (
    <Card className={classes['artist-card']} variant={'outlined'}>
      <CardMedia component={'img'} alt={'artist image'} image={props.image} />
      <CardHeader className={classes['artist-card-header']} title={props.name} />
      <CardContent className={classes['artist-card-content']}>
        <Typography className={classes['follower-count']}>
          {numberFormatter.format(props.followers)} followers on Spotify
        </Typography>
        <div className={classes['genre-chips-container']}>
          {props.genres?.map((genre: string) => (
            <Chip
              key={props.genres.indexOf(genre)}
              className={classes['genre-chip']}
              label={genre}
              size="small"
              color={'secondary'}
              variant={'filled'}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SpotifyArtistCard
