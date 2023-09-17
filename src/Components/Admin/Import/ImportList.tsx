import { ChangeEvent, useEffect, useState } from 'react'
import DataTable from '../../Common/Table/DataTable'
import { Alignment } from 'react-data-table-component'
import DataTableSearch from '../../Common/Table/DataTableSearch'
import Button from '@mui/material/Button'
import classes from './ImportList.module.scss'
import useFetchImports from '../../../Hooks/useFetchImports'
import { ImportDetails } from '../../../Api/Model/Jobs/ImportDetails'
import { columns } from './ImportTableColumns'
import LoadingSpinner from '../../Common/LoadingSpinner'
import ErrorAlert from '../../Common/ErrorAlert'

const ImportList = () => {
  const { imports, isLoading, error } = useFetchImports()
  const [searchText, setSearchText] = useState('')
  const [filteredImports, setFilteredImports] = useState<ImportDetails[]>([])

  useEffect(() => {
    if (imports) {
      setFilteredImports(
        imports.filter(
          (releaseImport: ImportDetails) =>
            (releaseImport.source && releaseImport.source.toLowerCase().includes(searchText.toLowerCase())) ||
            (releaseImport.startTime && releaseImport.startTime.toLowerCase().includes(searchText.toLowerCase())) ||
            (releaseImport.endTime && releaseImport.endTime.toLowerCase().includes(searchText.toLowerCase())) ||
            (releaseImport.state && releaseImport.state.toLowerCase().includes(searchText.toLowerCase())),
        ),
      )
    }
  }, [imports, searchText])

  const subHeaderComponent = (
    <div className={classes['sub-header']}>
      <DataTableSearch
        searchText={searchText}
        searchPlaceholder={'import'}
        onSearch={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
      />
      <div className={classes['sub-header__actions']}>
        <Button variant="outlined">Create import job</Button>
        <Button variant="outlined">Create retry cover download job</Button>
      </div>
    </div>
  )

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {error && <ErrorAlert />}
      <DataTable
        columns={columns}
        data={filteredImports}
        defaultSortFieldId={2}
        defaultSortAsc={false}
        subHeader
        subHeaderAlign={Alignment.LEFT}
        subHeaderComponent={subHeaderComponent}
      />
    </>
  )
}

export default ImportList
