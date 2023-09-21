import { ChangeEvent, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import DataTableSearch from '../../Common/Table/DataTableSearch'
import DataTable from '../../Common/Table/DataTable'
import { columns } from './AdminReleaseTableColumns'
import { Alignment } from 'react-data-table-component'
import classes from './AdminReleaseList.module.scss'
import useFetchAllReleases from '../../../Hooks/useFetchAllReleases'
import { Release } from '../../../Api/Model/Release/Release'

const AdminReleaseList = () => {
  const { releases } = useFetchAllReleases()
  const [searchText, setSearchText] = useState('')
  const [filteredReleases, setFilteredReleases] = useState<Release[]>([])
  // const navigate = useNavigate()

  useEffect(() => {
    if (releases) {
      setFilteredReleases(
        releases.filter(
          (release: Release) =>
            (release.artist && release.artist.toLowerCase().includes(searchText.toLowerCase())) ||
            (release.albumTitle && release.albumTitle.toLowerCase().includes(searchText.toLowerCase())) ||
            (release.releaseDate && release.releaseDate.toLowerCase().includes(searchText.toLowerCase())) ||
            (release.genre && release.genre.toLowerCase().includes(searchText.toLowerCase())),
        ),
      )
    }
  }, [releases, searchText])

  const subHeaderComponent = (
    <div className={classes['sub-header']}>
      <DataTableSearch
        searchText={searchText}
        searchPlaceholder={'release'}
        onSearch={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
      />
      {/*<div className={classes['sub-header__actions']}>*/}
      {/*  <Button variant="outlined">Create Administrator</Button>*/}
      {/*  <Button variant="outlined">Run cleanup</Button>*/}
      {/*</div>*/}
    </div>
  )

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredReleases}
        defaultSortFieldId={4}
        defaultSortAsc={true}
        subHeader
        subHeaderAlign={Alignment.LEFT}
        subHeaderComponent={subHeaderComponent}
        // onRowClicked={(user: UserDetails) => navigate(`${adminUsersList.path}/${user.publicId}`)}
      />
    </>
  )
}

export default AdminReleaseList
