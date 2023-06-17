import { useEffect } from 'react'
import SearchResultList from '../Components/Search/SearchResultList/SearchResultList'

export const SearchResults = () => {
  useEffect(() => {
    document.title = 'Search Results | Metal Detector'
  }, [])

  return <SearchResultList />
}
