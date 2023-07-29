import { useCallback, useState } from 'react'
import DataTable from '../../Common/Table/DataTable'
import { columns, data } from '../Mock/usersTable'

const UsersList = () => {
  const [selectedRows, setSelectedRows] = useState([])
  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows)
    console.log(state.selectedRows)
    console.log(selectedRows)
  }, [])

  return (
    <>
      <DataTable columns={columns} data={data} onRowClicked={handleRowSelected} />
    </>
  )
}

export default UsersList
