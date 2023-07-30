export const REST_ROUTES = {
  signIn: '/rest/v1/auth/login',
  signUp: '/rest/v1/auth/register',
  signUpVerification: '/rest/v1/auth/register/verification',
  signOut: '/rest/v1/auth/logout',
  refresh: '/rest/v1/auth/refresh',
  authenticated: '/rest/v1/auth',
  forgotPassword: '/rest/v1/auth/forgot-password',
  resetPassword: '/rest/v1/auth/reset-password',
  currentUser: '/rest/v1/me',
  updateEmailAddress: '/rest/v1/me/email',
  updatePassword: '/rest/v1/me/password',
  csrf: '/rest/v1/csrf',
  myArtists: '/rest/v1/my-artists',
  releases: '/rest/v1/releases',
  searchArtists: '/rest/v1/artists/search',
  users: '/rest/v1/users',
}
