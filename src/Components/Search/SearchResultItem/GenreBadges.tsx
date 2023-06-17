import { Chip } from '@mui/material'
import classes from './SearchResultItem.module.scss'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'

export type GenreBadgesProps = {
  genres: string[]
}

const GenreBadges = (props: GenreBadgesProps) => {
  const [genres, setGenres] = useState<string[]>([])

  useEffect(() => {
    setGenres(props.genres.slice(0, 4))
  }, [])

  return (
    <Box>
      {genres.map((genre: string, index: number) => (
        <Chip
          size="small"
          key={genre}
          label={genre}
          color={'secondary'}
          className={
            index < 2
              ? classes['search-result-item__genre-badge']
              : `${classes['search-result-item__genre-badge']} ${classes['search-result-item__genre-badge--desktop']}`
          }
        />
      ))}
    </Box>
  )
}

export default GenreBadges
