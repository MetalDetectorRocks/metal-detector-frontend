import { useAuthContext } from '../../Context/AuthContext'

const useUser = () => {
  const { ctx } = useAuthContext()
  return {
    user: ctx?.user,
    isAuthenticated: ctx?.user != undefined || ctx?.user != null,
  }
}

export default useUser
