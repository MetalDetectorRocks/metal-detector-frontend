import useApiWithToken from './Auth/useApiWithToken'
import { StatisticsResponse } from '@/Api/Model/Statistics/StatisticsResponse'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useQuery } from '@tanstack/react-query'

const fetchStatistics = () => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(['statistics'], () => {
    return API.get<StatisticsResponse>(REST_ROUTES.statistics)
  })

  return {
    userInfo: response?.data.userInfo,
    artistFollowingInfo: response?.data.artistFollowingInfo,
    releaseInfo: response?.data.releaseInfo,
    importInfo: response?.data.importInfo,
    isLoading,
    error,
  }
}

export default fetchStatistics
