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
import dayjs from 'dayjs'

export type ReleaseFilterProps = {
  sort: string
  handleQuerySubmit: (query: string) => void
  handleSortChange: (sort: string) => void
  handleDirectionChange: (direction: string) => void
  handleArtistsFilterChange: (artistsFilter: string) => void
  handleDateChange: (dateFrom: string, dateTo: string) => void
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

  const handleDateChange = (event: React.SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value

    let dateFrom = ''
    let dateTo = ''

    if (value === 'next') {
      dateFrom = dayjs().format('YYYY-MM-DD')
      dateTo = dayjs().add(1, 'month').format('YYYY-MM-DD')
    } else if (value === 'last') {
      dateFrom = dayjs().subtract(1, 'month').format('YYYY-MM-DD')
      dateTo = dayjs().format('YYYY-MM-DD')
    }

    props.handleDateChange(dateFrom, dateTo)
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
        <FormControlLabel control={<Radio />} label={'All upcoming'} value={'all'} onChange={handleDateChange} />
        <FormControlLabel control={<Radio />} label={'Next 30 days'} value={'next'} onChange={handleDateChange} />
        <FormControlLabel control={<Radio />} label={'Last 30 days'} value={'last'} onChange={handleDateChange} />
      </RadioGroup>
    </Box>
  )
}

export default ReleaseFilter
