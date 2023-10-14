import { ArrowDownward } from '@mui/icons-material'
import DataTable, { TableProps, createTheme } from 'react-data-table-component'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { darkThemeColorScheme } from '../../../Theme'
import React from 'react'

const sortIcon = <ArrowDownward />
createTheme('dark', {
  background: {
    default: 'transparent',
  },
  highlightOnHover: {
    default: darkThemeColorScheme.primaryBorder,
  },
})

const customStyles = {
  headRow: {
    style: {
      backgroundColor: darkThemeColorScheme.primaryBorder,
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
  },
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
  subHeader: {
    style: {
      padding: 0,
      paddingBottom: '10px',
    },
  },
  table: {
    style: {
      border: `1px solid ${darkThemeColorScheme.primaryBorder}`,
      borderRadius: '10px',
    },
  },
  pagination: {
    style: {
      border: 'none',
    },
  },
}

function DataTableBase<T>(props: TableProps<T>): React.JSX.Element {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName: string, elementToBeRendered: any) => {
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
