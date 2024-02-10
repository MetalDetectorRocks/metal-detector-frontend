import { REST_ROUTES } from '../../Router/RestRoutes'
import { useMutation } from 'react-query'
import useApiWithToken from '../Auth/useApiWithToken'

const useDeleteAccount = () => {
  const API = useApiWithToken()

  const mutation = useMutation({
    mutationFn: async (registrationID: string) => {
      await API.delete(`${REST_ROUTES.oAuthState}/${registrationID}`)
    },
  })

  return {
    deleteAuthorization: mutation.mutate,
  }
}

export default useDeleteAccount
