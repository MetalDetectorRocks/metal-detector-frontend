import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import useApiWithToken from './useApiWithToken'
import { useAuthContext } from '@/Context/AuthContext'
import { home } from '@/Router/InternalRoutes'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const useDeleteAccount = () => {
  const { setCtx } = useAuthContext()
  const API = useApiWithToken()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: () => {
      return API.delete(REST_ROUTES.currentUser).then(() => {
        setCtx({})
        navigate(home.path, { replace: true })
        toast.success('Account deleted!')
      })
    },
  })

  return {
    deleteAccount: mutation.mutate,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
  }
}

export default useDeleteAccount
