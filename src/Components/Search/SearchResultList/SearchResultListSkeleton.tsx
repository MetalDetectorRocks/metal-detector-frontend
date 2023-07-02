import { Skeleton, Stack } from '@mui/material'
import classes from './SearchResultList.module.scss'

export type SearchResultListSkeletonProps = {
  firstPage: boolean
}

const SearchResultListSkeleton = (props: SearchResultListSkeletonProps) => {
  const firstPageSkeletons = (
    <>
      <Skeleton variant="rounded" className={classes['search-result-skeletons__title']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
    </>
  )

  const fetchMoreSkeletons = (
    <>
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
      <Skeleton variant="rounded" className={classes['search-result-skeletons__item']} />
    </>
  )

  return (
    <Stack spacing={3} className={classes['search-result-skeletons']}>
      {props.firstPage ? firstPageSkeletons : fetchMoreSkeletons}
    </Stack>
  )
}

export default SearchResultListSkeleton
