import { useQuery } from 'react-query'
import { REST_ROUTES } from '@/Router/RestRoutes'
import useApiWithToken from '../Auth/useApiWithToken'
import { NotificationConfig } from '@/Api/Model/NotificationConfig/NotificationConfig'

const useFetchNotificationConfig = () => {
  const API = useApiWithToken()
  return useQuery('notification-config', async () => {
    return await API.get<NotificationConfig>(REST_ROUTES.notificationConfig)
  })
}

export default useFetchNotificationConfig
