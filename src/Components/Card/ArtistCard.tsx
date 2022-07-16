import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

export type ArtistCardProps = {
  name: string
  followedSince: string
  image: string
}

const ArtistCard = (props: ArtistCardProps) => {
  return (
    <Card variant={'outlined'}>
      <CardMedia component={'img'} alt={'artist image'} image={props.image} />
      <CardHeader title={props.name} />
      <CardContent>
        <Typography>Followed since {new Date(props.followedSince).toLocaleDateString()}</Typography>
      </CardContent>
    </Card>
  )
}

export default ArtistCard
