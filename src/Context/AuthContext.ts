import { createContext, useContext } from 'react'
import { User } from '../Api/Model/User'

export type Context = {
  user?: User
  accessToken?: string
}

export type AuthContextProps = {
  ctx: Context
  setCtx: (ctx: Context) => void
}

export const AuthContext = createContext<AuthContextProps>({
  ctx: {},
  setCtx: () => {},
})

export const useAuthContext = (): Readonly<AuthContextProps> => useContext(AuthContext)
