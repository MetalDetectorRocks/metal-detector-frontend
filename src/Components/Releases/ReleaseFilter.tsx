import classes from '../Releases/ReleaseFilter.module.scss'
import Box from '@mui/material/Box'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import React, { ChangeEvent, useState } from 'react'

export type ReleaseFilterProps = {
  sort: string
  handleQuerySubmit: (sort: string) => void
  handleSortChange: (sort: string) => void
  handleDirectionChange: (sort: string) => void
  handleArtistsFilterChange: (sort: string) => void
}

const ReleaseFilter = (props: ReleaseFilterProps) => {
  const [currentQuery, setCurrentQuery] = useState('')

  const handleQuerySubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    props.handleQuerySubmit(currentQuery)
  }

  const handleCurrentQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string
    setCurrentQuery(value)
  }

  const handleSortChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    props.handleSortChange(value)
  }

  const handleDirectionChange = (event: React.SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value
    props.handleDirectionChange(value)
  }

  const handleArtistsFilterChange = (event: React.SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value
    props.handleArtistsFilterChange(value)
  }

  return (
    <Box className={classes['release-filter']} component={'form'} onSubmit={handleQuerySubmit}>
      <Typography variant={'h6'}>Search</Typography>
      <TextField
        autoComplete={'off'}
        fullWidth
        className={classes['search']}
        placeholder={'Search Artist or Release...'}
        size={'small'}
        onChange={handleCurrentQueryChange}
      />
      <Button type={'submit'} className={classes['release-filter__search-button']} />

      <Typography variant={'h6'}>Sort by</Typography>
      <Select size={'small'} onChange={handleSortChange} value={props.sort}>
        <MenuItem value={'release_date'}>Release date</MenuItem>
        <MenuItem value={'announcement_date'}>Announcement date</MenuItem>
      </Select>
      <RadioGroup defaultValue={'asc'}>
        <FormControlLabel control={<Radio />} label={'Ascending'} value={'asc'} onChange={handleDirectionChange} />
        <FormControlLabel control={<Radio />} label={'Descending'} value={'desc'} onChange={handleDirectionChange} />
      </RadioGroup>
      <Typography variant={'h6'}>Artists</Typography>
      <RadioGroup defaultValue={'all'}>
        <FormControlLabel
          control={<Radio />}
          label={'All artists'}
          value={'all'}
          onChange={handleArtistsFilterChange}
        />
        <FormControlLabel
          control={<Radio />}
          label={'Only followed artists'}
          value={'my'}
          onChange={handleArtistsFilterChange}
        />
      </RadioGroup>
      <Typography variant={'h6'}>Time</Typography>
      <RadioGroup defaultValue={'all'}>
        <FormControlLabel control={<Radio />} label={'All upcoming'} value={'all'} />
        <FormControlLabel control={<Radio />} label={'Next 30 days'} value={'next'} />
        <FormControlLabel control={<Radio />} label={'Last 30 days'} value={'last'} />
      </RadioGroup>
    </Box>
  )
}

export default ReleaseFilter
