import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { UpdateNotificationConfigRequest } from '../../Api/Model/NotificationConfig/NotificationConfig'

const useUpdateNotificationConfig = () => {
  const API = useApiWithToken()
  const mutation = useMutation({
    mutationFn: async (request: UpdateNotificationConfigRequest) => {
      await API.put(REST_ROUTES.notificationConfig, JSON.stringify(request)).catch(
        (error: AxiosError<ErrorResponse>) => {
          toast.error(`Error saving notification config, please reload the page and try again: ${error.message}`)
        },
      )
    },
  })

  return {
    updateNotificationConfig: mutation.mutate,
    updateIsLoading: mutation.isLoading,
    updateError: mutation.error as AxiosError<ErrorResponse>,
  }
}

export default useUpdateNotificationConfig
