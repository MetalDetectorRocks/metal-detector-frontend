import useApiWithToken from '@/Hooks/Auth/useApiWithToken'
import { useQuery } from '@tanstack/react-query'
import { DashboardResponse } from '@/Api/Model/Dashboard/DashboardResponse'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'

const useFetchDashboard = () => {
  const API = useApiWithToken()
  const query = useQuery({
    queryKey: ['dashboard'],

    queryFn: () => {
      return API.get<DashboardResponse>(REST_ROUTES.dashboard)
    },
  })

  return {
    upcomingReleases: query.data?.data.upcomingReleases || [],
    recentReleases: query.data?.data.recentReleases || [],
    mostExpectedReleases: query.data?.data.mostExpectedReleases || [],
    recentlyFollowedArtists: query.data?.data.recentlyFollowedArtists || [],
    favoriteCommunityArtists: query.data?.data.favoriteCommunityArtists || [],
    isLoading: query.isLoading,
    error: query.error as AxiosError<ErrorResponse>,
  }
}

export default useFetchDashboard
