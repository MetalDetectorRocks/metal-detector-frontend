import { useMutation } from 'react-query'
import { REST_ROUTES } from '../Router/RestRoutes'
import { ArtistSearchResponse } from '../Api/Model/Artist/ArtistSearchResponse'
import { API } from '../Api/Axios'

export type SearchArtistsProps = {
  query: string
  page: number
}

//useMutation finde ich hier eleganter, ist zwar kein klassisches CRUD, aber so koppelst du Ausführung des
// Request von dem Aufruf des Hooks, anstatt es über ein "Refetch" wie in der alten Variante zu versuchen
// die dann aber davon abhängig ist, dass die Komponente auch wirklich neu gerendert wird

const useSearchArtists = () => {
  const {
    mutate: searchArtists,
    isLoading,
    error,
  } = useMutation((props: SearchArtistsProps) => {
    return API.get<ArtistSearchResponse>(REST_ROUTES.searchArtists, {
      params: {
        size: 10,
        ...props,
      },
    })
  })

  return {
    searchArtists,
    error,
    isLoading,
  }
}

export default useSearchArtists
