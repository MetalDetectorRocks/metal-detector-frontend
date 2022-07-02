import classes from './SearchBar.module.scss'
import { TextField } from '@mui/material'

const SearchBar = () => {
  return (
    <>
      <TextField
        autoComplete={'off'}
        fullWidth
        className={classes['search']}
        placeholder={'Search Artist or Release...'}
      />
    </>
  )
}

export default SearchBar
