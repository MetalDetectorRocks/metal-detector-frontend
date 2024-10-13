import { ImportDetails } from '@/Api/Model/Jobs/ImportDetails'
import dayjs from 'dayjs'
import { Chip } from '@mui/material'
import { ImportDetailsState } from '@/Api/Model/Jobs/ImportDetailsState'

export const columns = [
  {
    name: 'Source',
    selector: (releaseImport: ImportDetails) => releaseImport.source,
    sortable: true,
    width: '25%',
  },
  {
    name: 'Start time',
    selector: (releaseImport: ImportDetails) =>
      releaseImport.startTime ? dayjs(releaseImport.startTime).format('YYYY-MM-DD HH:mm:ss') : '',
    sortable: true,
    width: '15%',
  },
  {
    name: 'End time',
    selector: (releaseImport: ImportDetails) =>
      releaseImport.endTime ? dayjs(releaseImport.endTime).format('YYYY-MM-DD HH:mm:ss') : '',
    sortable: true,
    width: '15%',
  },
  {
    name: 'Duration',
    selector: (releaseImport: ImportDetails) => {
      const minutes = Math.floor(releaseImport.durationInSeconds / 60)
      const seconds = releaseImport.durationInSeconds % 60
      return `${minutes}:${('0' + seconds).slice(-2)}`
    },
    sortable: true,
  },
  {
    name: 'Total count requested',
    selector: (releaseImport: ImportDetails) => releaseImport.totalCountRequested,
    sortable: true,
    width: '13%',
  },
  {
    name: 'Total count imported',
    selector: (releaseImport: ImportDetails) => releaseImport.totalCountImported,
    sortable: true,
    width: '13%',
  },
  {
    name: 'State',
    cell: (releaseImport: ImportDetails) => (
      <Chip label={releaseImport.state} size="small" color={evalStateColor(releaseImport.state)} variant={'filled'} />
    ),
    sortable: true,
  },
]

function evalStateColor(state: ImportDetailsState): 'error' | 'info' | 'success' | 'secondary' {
  switch (state) {
    case ImportDetailsState.Initialized:
      return 'secondary'
    case ImportDetailsState.Successful:
      return 'success'
    case ImportDetailsState.Running:
      return 'info'
    case ImportDetailsState.Error:
      return 'error'
  }
}
