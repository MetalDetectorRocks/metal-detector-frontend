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
