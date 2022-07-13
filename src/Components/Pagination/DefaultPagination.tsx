import React from 'react'
import { Pagination } from '@mui/material'
import classes from './DefaultPagination.module.scss'

export type PaginationProps = {
  totalPages: number
  currentPage: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const DefaultPagination = (props: PaginationProps) => {
  return (
    <>
      {props.totalPages > 0 && (
        <Pagination
          className={classes['pagination']}
          count={props.totalPages}
          page={props.currentPage}
          onChange={props.onChange}
          showFirstButton
          showLastButton
          boundaryCount={2}
        />
      )}
    </>
  )
}

export default DefaultPagination
