import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useMutation } from 'react-query'

const useDeleteTelegramConfig = () => {
  const API = useApiWithToken()
  return useMutation({
    mutationFn: async () => {
      return await API.delete(REST_ROUTES.telegramConfig)
    },
  })
}

export default useDeleteTelegramConfig
