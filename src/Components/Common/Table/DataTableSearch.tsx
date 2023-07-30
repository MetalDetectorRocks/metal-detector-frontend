import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent } from 'react'

export type DataTableSearchProps = {
  searchText: string
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const DataTableSearch = (props: DataTableSearchProps) => {
  return (
    <TextField
      id="search-user-text-field"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color={'secondary'} />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      size={'small'}
      placeholder={'Search user'}
      value={props.searchText}
      onChange={props.onSearch}
    />
  )
}

export default DataTableSearch
