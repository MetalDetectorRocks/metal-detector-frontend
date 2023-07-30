import { ChangeEvent, useState } from 'react'
import DataTable from '../../Common/Table/DataTable'
import { columns, data, User } from '../Mock/usersTable'
import { Alignment } from 'react-data-table-component'
import DataTableSearch from '../../Common/Table/DataTableSearch'
import Button from '@mui/material/Button'
import classes from './UsersList.module.scss'

const UsersList = () => {
  // const [selectedRows, setSelectedRows] = useState([])
  // const handleRowSelected = useCallback((state: any) => {
  //   setSelectedRows(state.selectedRows)
  //   console.log(state.selectedRows)
  //   console.log(selectedRows)
  // }, [])
  const [searchText, setSearchText] = useState('')
  const filteredUsers = data.filter(
    (user: User) =>
      (user.username && user.username.toLowerCase().includes(searchText.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(searchText.toLowerCase())),
  )

  const subHeaderComponent = (
    <div className={classes['sub-header']}>
      <DataTableSearch
        searchText={searchText}
        onSearch={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
      />
      <div className={classes['sub-header__actions']}>
        <Button variant="outlined">Create Administrator</Button>
        <Button variant="outlined">Run cleanup</Button>
      </div>
    </div>
  )

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredUsers}
        subHeader
        subHeaderAlign={Alignment.LEFT}
        subHeaderComponent={subHeaderComponent}
      />
    </>
  )
}

export default UsersList
