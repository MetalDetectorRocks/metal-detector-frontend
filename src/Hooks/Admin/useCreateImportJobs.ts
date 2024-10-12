import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

const useCreateImportJobs = () => {
  const API = useApiWithToken()

  const importMutation = useMutation({
    mutationFn: async () => {
      await API.post(REST_ROUTES.imports)
        .then(() => {
          toast.success('Import jobs created!')
        })
        .catch((error: AxiosError<ErrorResponse>) => {
          toast.error(`Import job creation failed: ${error.message}`)
        })
    },
  })

  const coverDownloadMutation = useMutation({
    mutationFn: async () => {
      await API.post(REST_ROUTES.cover)
        .then(() => {
          toast.success('Retry cover download job created!')
        })
        .catch((error: AxiosError<ErrorResponse>) => {
          toast.error(`Retry cover download job creation failed: ${error.message}`)
        })
    },
  })

  return {
    createImportJobs: importMutation.mutate,
    createCoverDownloadJob: coverDownloadMutation.mutate,
  }
}

export default useCreateImportJobs
