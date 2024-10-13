import { useAuthContext } from '@/Context/AuthContext'
import { API_WITH_TOKEN } from '@/Api/Axios'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { toast } from 'react-toastify'

const useSignOut = () => {
  const { setCtx } = useAuthContext()
  return async () => {
    setCtx({})
    try {
      await API_WITH_TOKEN.post(REST_ROUTES.signOut)
      toast.success('Sign out successful!')
    } catch (err) {
      console.error(err)
    }
  }
}

export default useSignOut
