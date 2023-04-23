import { useEffect } from 'react'

export const SearchResults = () => {
  useEffect(() => {
    document.title = 'Search Results | Metal Detector'
  }, [])
  return <h1>SearchResults</h1>
}
