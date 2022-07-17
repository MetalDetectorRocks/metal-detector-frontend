import Container from '@mui/material/Container'
import ArtistGrid from '../Components/Grid/ArtistGrid'

export const MyArtists = () => {
  return (
    <Container maxWidth={'lg'}>
      <h1>MyArtists</h1>
      <ArtistGrid />
    </Container>
  )
}
