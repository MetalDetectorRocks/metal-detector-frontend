import React from 'react'
import { Pagination } from '@mui/material'

export type PaginationProps = {
  totalPages: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const DefaultPagination = (props: PaginationProps) => {
  return props.totalPages > 0 ? (
    <Pagination count={props.totalPages} showFirstButton showLastButton boundaryCount={2} onChange={props.onChange} />
  ) : (
    <div />
  )
}

export default DefaultPagination
