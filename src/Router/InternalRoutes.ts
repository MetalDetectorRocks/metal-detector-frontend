export type InternalRoute = {
  name: string
  path: string
}

export const home = { name: 'Home', path: '/' }
export const dashboard = { name: 'Dashboard', path: '/' }
export const blog = { name: 'Blog', path: '/blog' }
export const myArtists = { name: 'My Artists', path: '/my-artists' }
export const releases = { name: 'Releases', path: '/releases' }
export const search = { name: 'Search Results', path: '/search' }
export const account = { name: 'Account', path: '/settings/account' }
export const notificationSettings = { name: 'Notification Settings', path: '/settings/notification-settings' }
export const spotifySynchronization = { name: 'Spotify Synchronization', path: '/settings/spotify-synchronization' }
export const imprint = { name: 'Imprint', path: '/imprint' }
export const privacyPolicy = { name: 'Privacy Policy', path: '/privacy-policy' }
export const signIn = { name: 'Login', path: '/sign-in' }
export const signUp = { name: 'Register', path: '/sign-up' }
export const forgotPassword = { name: 'Forgot Password', path: '/forgot-password' }
export const resetPassword = { name: 'Reset Password', path: '/reset-password' }
export const logout = { name: 'Sign out', path: '/' }
export const unauthorized = { name: 'Unauthorized', path: '/unauthorized' }
export const adminDashboard = { name: 'Dashboard', path: '/admin/dashboard' }
export const adminNotifications = { name: 'Notifications', path: '/admin/notifications' }
export const adminReleaseImport = { name: 'Release import', path: '/admin/release-import' }
export const adminReleaseDenyList = { name: 'Releases deny list', path: '/admin/releases-deny-list' }
export const adminReleasesList = { name: 'Releases', path: '/admin/releases' }
export const adminReleasesDetail = { name: 'Release details', path: '/admin/releases/:releaseId' }
export const adminUsersList = { name: 'Users', path: '/admin/users' }
export const adminUsersNew = { name: 'New user', path: '/admin/users/new' }
export const adminUsersDetail = { name: 'User details', path: '/admin/users/:userId' }
