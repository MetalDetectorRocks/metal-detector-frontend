import { Grid } from '@mui/material'
import UsersWidget from './UsersWidget'
import ReleasesWidget from './ReleasesWidget'
import ArtistFollowingsWidget from './ArtistFollowingsWidget'
import useFetchStatistics from '../../../Hooks/useFetchStatistics'
import LoadingSpinner from '../../Common/LoadingSpinner'
import ErrorAlert from '../../Common/ErrorAlert'
import ImportWidget from './ImportWidget'
import { ImportInfo } from '../../../Api/Model/Statistics/ImportInfo'

const WidgetGrid = () => {
  const { userInfo, artistFollowingInfo, releaseInfo, importInfo, isLoading, error } = useFetchStatistics()

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {error && <ErrorAlert />}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UsersWidget userInfo={userInfo} />
        </Grid>
        <Grid item xs={6}>
          <ArtistFollowingsWidget artistFollowingInfo={artistFollowingInfo} />
        </Grid>
        <Grid item xs={12}>
          <ReleasesWidget releaseInfo={releaseInfo} />
        </Grid>
        {importInfo?.map((info: ImportInfo) => (
          <Grid item xs={6} key={importInfo.indexOf(info)}>
            <ImportWidget title={mapTitle(info.source)} importInfo={info} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

function mapTitle(title: string): string {
  return title
    .toLowerCase()
    .replaceAll('_', ' ')
    .split(' ')
    .map((word: string) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
}

export default WidgetGrid
