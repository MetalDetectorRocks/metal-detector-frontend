import { Grid } from '@mui/material'
import UsersWidget from './UsersWidget'
import ReleasesCountWidget from './ReleasesWidget'
import MetalArchivesImportWidget from './MetalArchivesImportWidget'
import ArtistFollowingsWidget from './ArtistFollowingsWidget'
import TimeForMetalImportWidget from './TimeForMetalImportWidget'

const WidgetGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <UsersWidget />
      </Grid>
      <Grid item xs={6}>
        <ArtistFollowingsWidget />
      </Grid>
      <Grid item xs={12}>
        <ReleasesCountWidget />
      </Grid>
      <Grid item xs={6}>
        <MetalArchivesImportWidget />
      </Grid>
      <Grid item xs={6}>
        <TimeForMetalImportWidget />
      </Grid>
    </Grid>
  )
}

export default WidgetGrid
