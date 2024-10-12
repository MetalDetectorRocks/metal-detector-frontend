import classes from './SearchBar.module.scss'
import { TextField } from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router-dom'
import { search } from '@/Router/InternalRoutes'
import { KeyboardEvent, useEffect, useState } from 'react'

export type SearchBarProps = {
  autofocus: boolean
}

const SearchBar = (props: SearchBarProps) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = window.location

  const handleSearch = () => {
    navigate(`${search.path}?query=${query}`)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  useEffect(() => {
    if (location.pathname != search.path) {
      setQuery('')
    }
  }, [location.pathname])

  return (
    <>
      <TextField
        autoComplete={'off'}
        fullWidth
        className={classes['search']}
        placeholder={'Search Artist...'}
        value={query}
        autoFocus={props.autofocus}
        onChange={(event) => setQuery(event.target.value || '')}
        onKeyDown={handleKeyDown}
      />
      <IconButton
        edge="start"
        size="medium"
        onClick={handleSearch}
        className={classes['search__go-icon']}
        color={'secondary'}
      >
        <DoubleArrowIcon />
      </IconButton>
    </>
  )
}

export default SearchBar
