import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/auth/Login'
import { AuthLayout } from '../layouts/AuthLayout'
import { Releases } from '../pages/Releases'
import { MyArtists } from '../pages/MyArtists'
import { Imprint } from '../pages/Imprint'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { AccountDetails } from '../pages/settings/AccountDetails'
import { NotificationSettings } from '../pages/settings/NotificationSettings'
import { SpotifySynchronization } from '../pages/settings/SpotifySynchronization'
import { SearchResults } from '../pages/SearchResults'
import { ForgotPassword } from '../pages/auth/ForgotPassword'
import { ResetPassword } from '../pages/auth/ResetPassword'
import { Register } from '../pages/auth/Register'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="releases" element={<Releases />} />
          <Route path="my-artists" element={<MyArtists />} />
          <Route path="artists/search" element={<SearchResults />} />
          <Route path="settings/account-details" element={<AccountDetails />} />
          <Route path="settings/notification-settings" element={<NotificationSettings />} />
          <Route path="settings/spotify-synchronization" element={<SpotifySynchronization />} />
          <Route path="imprint" element={<Imprint />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
