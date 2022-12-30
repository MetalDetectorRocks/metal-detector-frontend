import DefaultPagination from '../Pagination/DefaultPagination'
import { List, ListItem } from '@mui/material'
import ReleaseCard from '../Card/ReleaseCard'
import Box from '@mui/material/Box'
import React from 'react'
import classes from '../Releases/ReleaseList.module.scss'
import { BackendPagination } from '../../Api/Model/Common/BackendPagination'
import { Release } from '../../Api/Model/Release/Release'

export type ReleaseListProps = {
  releases: Release[]
  pagination?: BackendPagination
  handlePaginationChange: (event: React.ChangeEvent<unknown>, page: number) => void
  showAnnouncementDate: boolean
}

const ReleaseList = (props: ReleaseListProps) => {
  return (
    <Box className={classes['release-list-box']}>
      <List>
        {props.releases.map((release: Release) => (
          <ListItem key={props.releases.indexOf(release)}>
            <ReleaseCard release={release} showAnnouncementDate={props.showAnnouncementDate} />
          </ListItem>
        ))}
      </List>
      <DefaultPagination
        totalPages={props.pagination?.totalPages || 0}
        currentPage={props?.pagination?.currentPage || 0}
        onChange={props.handlePaginationChange}
      />
    </Box>
  )
}

export default ReleaseList
