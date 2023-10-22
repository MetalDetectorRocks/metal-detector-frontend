import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

const useCreateUserJobs = () => {
  const API = useApiWithToken()

  const cleanupMutation = useMutation({
    mutationFn: async () => {
      await API.post(REST_ROUTES.registrationCleanup)
        .then(() => {
          toast.success('Registration cleaned up!')
        })
        .catch((error: AxiosError<ErrorResponse>) => {
          toast.error(`Cleaning up registration failed: ${error.message}`)
        })
    },
  })

  return {
    cleanupRegistration: cleanupMutation.mutate,
  }
}

export default useCreateUserJobs
