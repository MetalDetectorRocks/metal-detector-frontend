import { useQuery } from '@tanstack/react-query'
import { REST_ROUTES } from '@/Router/RestRoutes'
import useApiWithToken from '../Auth/useApiWithToken'
import { NotificationConfig } from '@/Api/Model/NotificationConfig/NotificationConfig'

const useFetchNotificationConfig = () => {
  const API = useApiWithToken()
  return useQuery({
    queryKey: ['notification-config'],

    queryFn: async () => {
      return await API.get<NotificationConfig>(REST_ROUTES.notificationConfig)
    },
  })
}

export default useFetchNotificationConfig
