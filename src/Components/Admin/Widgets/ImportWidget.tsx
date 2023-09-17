import Widget from './Widget'
import { Grid } from '@mui/material'
import NeedlePieChart from '../../Common/Chart/NeedlePieChart'
import WidgetLabeledValue from './WidgetLabeledValue'
import classes from './WidgetLabeledValue.module.scss'
import { ImportInfo } from '../../../Api/Model/Statistics/ImportInfo'
import dayjs from 'dayjs'

export type ImportWidgetProps = {
  title: string
  importInfo?: ImportInfo
}

const ImportWidget = (props: ImportWidgetProps) => {
  const lastImport = dayjs(props.importInfo?.lastImport).format('YYYY-MM-DD hh:mm')
  const lastSuccessfulImport = dayjs(props.importInfo?.lastSuccessfulImport).format('YYYY-MM-DD hh:mm')

  return (
    <Widget title={props.title}>
      <Grid container height={'95%'} spacing={0}>
        <Grid item xs={7}>
          <NeedlePieChart value={props.importInfo?.successRate || 0} />
        </Grid>
        <Grid item xs={5} className={classes['labeled-value-wrapper']}>
          <WidgetLabeledValue value={lastImport || 'Never'} label={'Last import'} />
          <WidgetLabeledValue value={lastSuccessfulImport || 'Never'} label={'Last successful'} />
        </Grid>
      </Grid>
    </Widget>
  )
}

export default ImportWidget
