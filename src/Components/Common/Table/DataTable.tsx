import { ArrowDownward } from '@mui/icons-material'
import DataTable, { TableProps, createTheme } from 'react-data-table-component'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

const sortIcon = <ArrowDownward />
createTheme('dark', {
  background: {
    default: 'transparent',
  },
  highlightOnHover: {
    default: '#26252E',
  },
})

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
    },
  },
  cells: {
    style: {
      fontSize: '15px',
    },
  },
  table: {
    style: {
      border: '1px solid rgba(81, 81, 81, 1)',
      borderRadius: '10px',
    },
  },
  pagination: {
    style: {
      border: 'none',
    },
  },
}

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true
      }}
      {...props}
    >
      <DataTable
        highlightOnHover
        noHeader
        pagination
        pointerOnHover
        responsive
        // subHeader
        // subHeaderAlign={Alignment.RIGHT}
        sortIcon={sortIcon}
        theme={'dark'}
        paginationRowsPerPageOptions={[10, 20, 30]}
        paginationPerPage={10}
        customStyles={customStyles}
        {...props}
      />
    </StyleSheetManager>
  )
}

export default DataTableBase
