import { BackendPagination, Release } from '../../Api/responseTypes'
import DefaultPagination from '../Pagination/DefaultPagination'
import { List, ListItem } from '@mui/material'
import ReleaseCard from '../Card/ReleaseCard'
import Box from '@mui/material/Box'
import React from 'react'

export type ReleaseListProps = {
  releases: Release[]
  pagination: BackendPagination
  handlePaginationChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const ReleaseList = (props: ReleaseListProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <List>
        {props.releases.map((release: Release) => (
          <ListItem key={props.releases.indexOf(release)}>
            <ReleaseCard
              artist={release.artist}
              additionalArtists={release.additionalArtists}
              albumTitle={release.albumTitle}
              releaseDate={release.releaseDate}
              announcementDate={release.announcementDate}
              genre={release.genre}
              type={release.type}
              coverUrl={release.coverUrl}
              reissue={release.reissue}
            />
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
