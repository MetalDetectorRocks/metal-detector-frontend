import { useAuthContext } from '@/Context/AuthContext'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { signIn, unauthorized } from '@/Router/InternalRoutes'

export type RequireAuthProps = {
  allowedRoles: string[]
}

const RequireAuth = (props: RequireAuthProps) => {
  const { ctx } = useAuthContext()
  const location = useLocation()

  const isAuthenticated = ctx?.accessToken
  const isAllowed = ctx?.user?.roles.find((role) => props.allowedRoles.includes(role))

  if (isAllowed) {
    return <Outlet />
  } else if (isAuthenticated) {
    return <Navigate to={unauthorized.path} state={{ from: location }} replace />
  } else {
    return <Navigate to={signIn.path} state={{ from: location }} replace />
  }
}

export default RequireAuth
