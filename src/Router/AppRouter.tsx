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
  adminDashboard,
  unauthorized,
  adminUsersDetail,
  adminNotifications,
  adminReleasesList,
  adminReleaseImport,
  adminUsersList,
  adminUsersNew,
  adminReleasesDetail,
  adminReleaseDenyList,
} from './InternalRoutes'
import { AdminLayout } from '../Layouts/AdminLayout/AdminLayout'
import { AdminDashboardPage } from '../Pages/Admin/AdminDashboardPage'
import RequireAuth from '../Components/Auth/RequireAuth'
import { UserRole } from '../Api/Model/Auth/UserRole'
import useUser from '../Hooks/Auth/useUser'
import { LandingPage } from '../Pages/Landing'
import PersistentLogin from '../Components/Auth/PersistentLogin'
import AdminReleaseImportPage from '../Pages/Admin/AdminReleaseImportPage'
import AdminReleasesListPage from '../Pages/Admin/AdminReleasesListPage'
import AdminNotificationsPage from '../Pages/Admin/AdminNotificationsPage'
import AdminUsersListPage from '../Pages/Admin/AdminUsersListPage'
import AdminReleasesDetailsPage from '../Pages/Admin/AdminReleasesDetailsPage'
import AdminUsersNewPage from '../Pages/Admin/AdminUsersNewPage'
import AdminUsersDetailsPage from '../Pages/Admin/AdminUsersDetailsPage'
import AdminReleasesDenyListPage from '../Pages/Admin/AdminReleasesDenyListPage'

export const AppRouter = () => {
  const { isAuthenticated } = useUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistentLogin />}>
          {/* Public site routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={isAuthenticated ? <Home /> : <LandingPage />} />
            <Route path={releases.path} element={<Releases />} />
            <Route path={search.path} element={<SearchResults />} />
            <Route path={imprint.path} element={<Imprint />} />
            <Route path={privacyPolicy.path} element={<PrivacyPolicy />} />
            <Route path={unauthorized.path} element={<Unauthorized />} />
          </Route>

          {/* Protected site routes */}
          <Route path="/" element={<MainLayout />}>
            <Route element={<RequireAuth allowedRoles={[UserRole.User, UserRole.Administrator]} />}>
              <Route path={myArtists.path} element={<MyArtists />} />
              <Route path={account.path} element={<AccountDetails />} />
              <Route path={notificationSettings.path} element={<NotificationSettings />} />
              <Route path={spotifySynchronization.path} element={<SpotifySynchronization />} />
            </Route>
          </Route>
        </Route>

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />

        {/* Public auth routes */}
        <Route element={<AuthLayout />}>
          <Route path={signIn.path} element={<Login />} />
          <Route path={signUp.path} element={<Register />} />
          <Route path={forgotPassword.path} element={<ForgotPassword />} />
          <Route path={resetPassword.path} element={<ResetPassword />} />
        </Route>

        {/* Protected admin routes */}
        <Route element={<PersistentLogin />}>
          <Route element={<AdminLayout />}>
            <Route element={<RequireAuth allowedRoles={[UserRole.Administrator]} />}>
              <Route path={adminDashboard.path} element={<AdminDashboardPage />} />
              <Route path={adminReleaseImport.path} element={<AdminReleaseImportPage />} />
              <Route path={adminReleasesList.path} element={<AdminReleasesListPage />} />
              <Route path={adminReleasesDetail.path} element={<AdminReleasesDetailsPage />} />
              <Route path={adminReleaseDenyList.path} element={<AdminReleasesDenyListPage />} />
              <Route path={adminNotifications.path} element={<AdminNotificationsPage />} />
              <Route path={adminUsersList.path} element={<AdminUsersListPage />} />
              <Route path={adminUsersNew.path} element={<AdminUsersNewPage />} />
              <Route path={adminUsersDetail.path} element={<AdminUsersDetailsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
