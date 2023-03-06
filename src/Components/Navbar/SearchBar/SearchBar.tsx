import classes from './SearchBar.module.scss'
import { TextField } from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import IconButton from '@mui/material/IconButton'

export type SearchBarProps = {
  autofocus: boolean
}

const SearchBar = (props: SearchBarProps) => {
  const handleSearch = () => {
    // ToDo: implement
  }
  return (
    <>
      <TextField
        autoComplete={'off'}
        fullWidth
        className={classes['search']}
        placeholder={'Search Artist...'}
        autoFocus={props.autofocus}
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
