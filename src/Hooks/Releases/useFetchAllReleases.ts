import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { useQuery } from '@tanstack/react-query'
import { Release } from '@/Api/Model/Release/Release'
import dayjs from 'dayjs'

const useFetchAllReleases = () => {
  const API = useApiWithToken()
  const dateFrom = dayjs().subtract(3, 'month').format('YYYY-MM-DD')
  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ['releases'],

    queryFn: () => {
      return API.get<Release[]>(REST_ROUTES.allReleases, {
        params: { dateFrom: dateFrom },
      })
    },
  })

  return {
    releases: response?.data,
    error: error as AxiosError<ErrorResponse>,
    isLoading: isLoading,
  }
}

export default useFetchAllReleases
