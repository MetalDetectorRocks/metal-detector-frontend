import dayjs from 'dayjs'
import { Release } from '../../../Api/Model/Release/Release'
import { Chip } from '@mui/material'
import { ReleaseState } from '../../../Api/Model/Release/ReleaseState'

export const columns = [
  {
    name: 'State',
    cell: (release: Release) => (
      <Chip label={release.state} size="small" color={evalStateColor(release.state)} variant={'filled'} />
    ),
    sortable: true,
  },
  {
    name: 'Artist',
    selector: (release: Release) => release.artist,
    sortable: true,
  },
  {
    name: 'Album title',
    selector: (release: Release) => release.albumTitle,
    sortable: true,
  },
  {
    name: 'Release date',
    selector: (release: Release) => dayjs(release.releaseDate).format('YYYY-MM-DD'),
    sortable: true,
  },
  {
    name: 'Genre',
    selector: (release: Release) => release.genre,
    sortable: true,
  },
  {
    name: 'Type',
    selector: (release: Release) => release.type,
    sortable: true,
  },
  {
    name: 'Source',
    selector: (release: Release) => release.source,
    sortable: true,
  },
]

function evalStateColor(state: ReleaseState): 'error' | 'warning' | 'success' | 'secondary' {
  switch (state) {
    case ReleaseState.Ok:
      return 'success'
    case ReleaseState.Duplicate:
      return 'warning'
    case ReleaseState.Faulty:
      return 'error'
    case ReleaseState.Demo:
      return 'secondary'
  }
}
