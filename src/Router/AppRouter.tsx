import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout/MainLayout'
import { Home } from '../Pages/Home'
import { NotFound } from '../Pages/NotFound'
import { Login } from '../Pages/Auth/Login'
import { AuthLayout } from '../Layouts/AuthLayout/AuthLayout'
import { Releases } from '../Pages/Releases'
import { MyArtists } from '../Pages/MyArtists'
import { Imprint } from '../Pages/Imprint'
import { PrivacyPolicy } from '../Pages/PrivacyPolicy'
import { AccountDetails } from '../Pages/Settings/AccountDetails'
import { NotificationSettings } from '../Pages/Settings/NotificationSettings'
import { SpotifySynchronization } from '../Pages/Settings/SpotifySynchronization'
import { SearchResults } from '../Pages/SearchResults'
import { Unauthorized } from '../Pages/Unauthorized'
import { ForgotPassword } from '../Pages/Auth/ForgotPassword'
import { ResetPassword } from '../Pages/Auth/ResetPassword'
import { Register } from '../Pages/Auth/Register'
import {
  myArtists,
  account,
  releases,
  search,
  notificationSettings,
  spotifySynchronization,
  privacyPolicy,
  imprint,
  signIn,
  forgotPassword,
  signUp,
  resetPassword,
  adminArea,
  unauthorized,
} from './InternalRoutes'
import { AdminLayout } from '../Layouts/AdminLayout/AdminLayout'
import { AdminDashboard } from '../Pages/Admin/AdminDashboard'
import RequireAuth from '../Components/Auth/RequireAuth'
import { UserRole } from '../Api/Model/UserRole'
import useUser from '../Hooks/useUser'
import { LandingPage } from '../Pages/Landing'

export const AppRouter = () => {
  const { isAuthenticated } = useUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Public routes */}
          <Route index element={isAuthenticated ? <Home /> : <LandingPage />} />
          <Route path={releases.path} element={<Releases />} />
          <Route path={search.path} element={<SearchResults />} />
          <Route path={imprint.path} element={<Imprint />} />
          <Route path={privacyPolicy.path} element={<PrivacyPolicy />} />
          <Route path={unauthorized.path} element={<Unauthorized />} />

          {/* Protected routes */}
          <Route element={<RequireAuth allowedRoles={[UserRole.User, UserRole.Administrator]} />}>
            <Route path={myArtists.path} element={<MyArtists />} />
            <Route path={account.path} element={<AccountDetails />} />
            <Route path={notificationSettings.path} element={<NotificationSettings />} />
            <Route path={spotifySynchronization.path} element={<SpotifySynchronization />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          {/* Public routes */}
          <Route path={signIn.path} element={<Login />} />
          <Route path={signUp.path} element={<Register />} />
          <Route path={forgotPassword.path} element={<ForgotPassword />} />
          <Route path={resetPassword.path} element={<ResetPassword />} />
        </Route>

        <Route element={<AdminLayout />}>
          {/* Protected routes */}
          <Route element={<RequireAuth allowedRoles={[UserRole.Administrator]} />}>
            <Route path={adminArea.path} element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
