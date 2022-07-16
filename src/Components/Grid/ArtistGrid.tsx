import { Grid } from '@mui/material'
import ArtistCard from '../Card/ArtistCard'
import { Artist } from '../../Api/responseTypes'

export type ArtistGridProps = {
  artists: Artist[]
}

const ArtistGrid = (props: ArtistGridProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      direction={'row'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
    >
      {props.artists?.map((artist) => (
        <Grid item xs={3} key={props.artists?.indexOf(artist)}>
          <ArtistCard name={artist.artistName} followedSince={artist.followedSince} image={artist.mediumImage} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ArtistGrid
