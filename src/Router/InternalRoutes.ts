export type InternalRoute = {
  name: string
  path: string
}

export const home = { name: 'Home', path: '/' }
export const dashboard = { name: 'Dashboard', path: '/' }
export const blog = { name: 'Blog', path: 'blog' }
export const myArtists = { name: 'My Artists', path: 'my-artists' }
export const releases = { name: 'Releases', path: 'releases' }
export const search = { name: 'Search Results', path: 'search' }
export const account = { name: 'Account', path: 'settings/account' }
export const notificationSettings = { name: 'Notification Settings', path: 'settings/notification-settings' }
export const spotifySynchronization = { name: 'Spotify Synchronization', path: 'settings/spotify-synchronization' }
export const imprint = { name: 'Imprint', path: 'imprint' }
export const privacyPolicy = { name: 'Privacy Policy', path: 'privacy-policy' }
export const login = { name: 'Login', path: 'login' }
export const register = { name: 'Register', path: 'register' }
export const forgotPassword = { name: 'Forgot Password', path: 'forgot-password' }
export const resetPassword = { name: 'Reset Password', path: 'reset-password' }
export const logout = { name: 'Logout', path: '/' }
export const adminArea = { name: 'Admin Area', path: 'admin' }
