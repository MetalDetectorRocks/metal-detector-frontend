import { ChangeEvent, useEffect, useState } from 'react'
import DataTable from '../../Common/Table/DataTable'
import { columns } from './UserTableColumns'
import { Alignment } from 'react-data-table-component'
import DataTableSearch from '../../Common/Table/DataTableSearch'
import classes from './UsersList.module.scss'
import useFetchUsers from '../../../Hooks/Admin/useFetchUsers'
import { UserDetails } from '@/Api/Model/User/UserDetails'
import { useNavigate } from 'react-router-dom'
import { adminUsersList } from '@/Router/InternalRoutes'
import UserJobButtons from './UserJobButtons'

const UsersList = () => {
  const { users } = useFetchUsers()
  const [searchText, setSearchText] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<UserDetails[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (users) {
      setFilteredUsers(
        users.filter(
          (user: UserDetails) =>
            (user.username && user.username.toLowerCase().includes(searchText.toLowerCase())) ||
            (user.email && user.email.toLowerCase().includes(searchText.toLowerCase())),
        ),
      )
    }
  }, [users, searchText])

  const subHeaderComponent = (
    <div className={classes['sub-header']}>
      <DataTableSearch
        searchText={searchText}
        searchPlaceholder={'user'}
        onSearch={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
      />
      <div className={classes['sub-header__actions']}>
        <UserJobButtons />
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
        onRowClicked={(user: UserDetails) => navigate(`${adminUsersList.path}/${user.publicId}`)}
      />
    </>
  )
}

export default UsersList
