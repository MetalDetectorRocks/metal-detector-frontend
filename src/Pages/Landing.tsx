import { useAuthContext } from '../Context/AuthContext'

export const LandingPage = () => {
  const { ctx } = useAuthContext()
  return (
    <>
      <h1>Landing Page</h1>
      {ctx.user && <p>Hello {ctx.user.username}</p>}
      {ctx.accessToken && <p>{ctx.accessToken}</p>}
    </>
  )
}
