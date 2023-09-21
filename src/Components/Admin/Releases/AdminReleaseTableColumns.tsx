import dayjs from 'dayjs'
import { Release } from '../../../Api/Model/Release/Release'

export const columns = [
  {
    name: 'State',
    selector: (release: Release) => release.state,
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

// function evalStateColor(state: ImportDetailsState): 'error' | 'info' | 'success' {
//   switch (state) {
//     case ImportDetailsState.Successful:
//       return 'success'
//     case ImportDetailsState.Running:
//       return 'info'
//     case ImportDetailsState.Error:
//       return 'error'
//   }
// }
