import { useMutation } from 'react-query'
import { API } from '../../Api/Axios'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { ResetPasswordRequest } from '../../Api/Model/Auth/ResetPasswordRequest'
import { useEffect, useState } from 'react'

const useResetPassword = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const mutation = useMutation({
    mutationFn: (request: ResetPasswordRequest) => {
      return API.post(REST_ROUTES.resetPassword, JSON.stringify(request))
    },
  })

  useEffect(() => {
    const resetPasswordError = mutation.error as AxiosError<ErrorResponse>
    if (resetPasswordError) {
      const status = resetPasswordError?.response?.status
      if (status && status === 401) {
        setErrorMsg('The link to reset your password has expired. Please request again.')
      } else if (status && status >= 400) {
        setErrorMsg(resetPasswordError?.response?.data?.messages?.join(' ') || resetPasswordError?.message)
      }
    }
  }, [mutation.error])

  return {
    resetPassword: mutation.mutate,
    errorMsg,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  }
}

export default useResetPassword
