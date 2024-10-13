import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from '@tanstack/react-query'

const useGenerateRegistrationId = () => {
  const API = useApiWithToken()
  return useMutation({
    mutationFn: async () => {
      return await API.post<number>(REST_ROUTES.telegramConfig).then((response) => {
        return response.data
      })
    },
  })
}

export default useGenerateRegistrationId
