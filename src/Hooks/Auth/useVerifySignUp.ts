import { SignUpVerificationRequest } from '../../Api/Model/Auth/SignUpVerificationRequest'
import { API } from '../../Api/Axios'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { useEffect, useState } from 'react'

const useVerifySignUp = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [username, setUsername] = useState('')

  const mutation = useMutation({
    mutationFn: (request: SignUpVerificationRequest) => {
      return API.post(REST_ROUTES.signUpVerification, JSON.stringify(request))
    },
  })

  useEffect(() => {
    const verificationError = mutation.error as AxiosError<ErrorResponse>
    if (verificationError) {
      const status = verificationError?.response?.status
      if (status && status >= 500) {
        setErrorMsg(verificationError?.response?.data?.messages?.join(' ') || verificationError?.message)
      } else if (status && status === 401) {
        setErrorMsg('The link to activate your account has expired. Please register again.')
      }
    } else if (mutation.isSuccess) {
      setSuccessMsg('Your account has been successfully activated.')
      setUsername(mutation.data?.data?.username)
    }
  }, [mutation.error, mutation.isSuccess])

  return {
    verify: mutation.mutate,
    successMsg,
    errorMsg,
    username,
  }
}

export default useVerifySignUp
