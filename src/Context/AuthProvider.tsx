import { FC, ReactNode, useState } from 'react'
import { AuthContext, AuthContextProps, AuthContextType } from './AuthContext'

interface AuthProviderProps {
  children?: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [ctx, setCtx] = useState<AuthContextType>({})
  const authContext: AuthContextProps = {
    ctx: ctx,
    setCtx: (ctx) => setCtx(ctx),
  }

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
}
