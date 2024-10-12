import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from 'react-query'
import { UpdateNotificationConfigRequest } from '@/Api/Model/NotificationConfig/NotificationConfig'

const useUpdateNotificationConfig = () => {
  const API = useApiWithToken()
  return useMutation({
    mutationFn: async (request: UpdateNotificationConfigRequest) => {
      return await API.put(REST_ROUTES.notificationConfig, JSON.stringify(request)).then((response) => {
        response.data
      })
    },
  })
}

export default useUpdateNotificationConfig
