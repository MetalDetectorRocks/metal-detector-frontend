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
      await API.put(REST_ROUTES.notificationConfig, JSON.stringify(request))
        // .then(() => {
        //   toast.success('Import jobs created!')
        // })
        .catch((error: AxiosError<ErrorResponse>) => {
          toast.error(`Error on saving notification config: ${error.message}`)
        })
    },
  })

  return {
    updateNotificationConfig: mutation.mutate,
    error: mutation.error as AxiosError<ErrorResponse>,
    isLoading: mutation.isLoading,
  }
}

export default useUpdateNotificationConfig
