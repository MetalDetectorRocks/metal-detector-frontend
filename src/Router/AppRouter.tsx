import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import { Home } from '../Pages/Home'
import { NotFound } from '../Pages/NotFound'
import { Login } from '../Pages/Auth/Login'
import { AuthLayout } from '../Layouts/AuthLayout'
import { Releases } from '../Pages/Releases'
import { MyArtists } from '../Pages/MyArtists'
import { Imprint } from '../Pages/Imprint'
import { PrivacyPolicy } from '../Pages/PrivacyPolicy'
import { AccountDetails } from '../Pages/Settings/AccountDetails'
import { NotificationSettings } from '../Pages/Settings/NotificationSettings'
import { SpotifySynchronization } from '../Pages/Settings/SpotifySynchronization'
import { SearchResults } from '../Pages/SearchResults'
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
  login,
  forgotPassword,
  register,
  resetPassword,
} from './InternalRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={releases.path} element={<Releases />} />
          <Route path={myArtists.path} element={<MyArtists />} />
          <Route path={search.path} element={<SearchResults />} />
          <Route path={account.path} element={<AccountDetails />} />
          <Route path={notificationSettings.path} element={<NotificationSettings />} />
          <Route path={spotifySynchronization.path} element={<SpotifySynchronization />} />
          <Route path={imprint.path} element={<Imprint />} />
          <Route path={privacyPolicy.path} element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={login.path} element={<Login />} />
          <Route path={register.path} element={<Register />} />
          <Route path={forgotPassword.path} element={<ForgotPassword />} />
          <Route path={resetPassword.path} element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
