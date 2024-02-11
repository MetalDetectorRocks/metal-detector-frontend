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

  const deleteAuthorization = (registrationID: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(registrationID, {
        onSuccess: () => resolve(),
        onError: (error) => reject(error),
      })
    })
  }

  return {
    deleteAuthorization,
  }
}

export default useDeleteAccount
