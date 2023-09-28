import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent } from 'react'

export type DataTableSearchProps = {
  searchText: string
  searchPlaceholder: string
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const DataTableSearch = (props: DataTableSearchProps) => {
  return (
    <TextField
      id="search-text-field"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color={'secondary'} />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      size={'small'}
      placeholder={`Search ${props.searchPlaceholder}`}
      value={props.searchText}
      onChange={props.onSearch}
    />
  )
}

export default DataTableSearch
