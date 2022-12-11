import { createContext, useContext } from 'react'
import { User } from '../Api/Model/User'

export type AuthContextType = {
  user?: User
  accessToken?: string
}

export type AuthContextProps = {
  ctx: AuthContextType
  setCtx: (ctx: AuthContextType) => void
}

export const AuthContext = createContext<AuthContextProps>({
  ctx: {},
  setCtx: () => {},
})

export const useAuthContext = (): Readonly<AuthContextProps> => useContext(AuthContext)
