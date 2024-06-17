import { SpotifyArtist } from '../../Api/Model/Artist/SpotifyArtist'
import { Chip, Typography } from '@mui/material'
import classes from './SpotifySynchronizationTableColumns.module.scss'

const numberFormatter = new Intl.NumberFormat('en-us', { minimumFractionDigits: 0 })

export const columns = [
  {
    name: 'Thumb',
    cell: (artist: SpotifyArtist) => (
      <div className={classes['spotify-thumb-wrapper']}>
        <img src={artist.thumbnailImage} className={classes['spotify-thumb']} alt="Spotify artist thumbnail" />
      </div>
    ),
    sortable: false,
    width: '10%',
  },
  {
    name: 'Name',
    cell: (artist: SpotifyArtist) => (
      <div className={classes['spotify-info-cell']}>
        <Typography>{artist.name}</Typography>
        <div className={classes['spotify-genres']}>
          {artist.genres?.map((genre: string) => (
            <Chip
              key={artist.genres.indexOf(genre)}
              label={genre}
              size="small"
              color={'secondary'}
              variant={'filled'}
            />
          ))}
        </div>
        <Typography>{numberFormatter.format(artist.follower)} followers on Spotify</Typography>
      </div>
    ),
    sortable: true,
    sortFunction: (artist1: SpotifyArtist, artist2: SpotifyArtist) => artist1.name.localeCompare(artist2.name),
    width: '80%',
  },
]
