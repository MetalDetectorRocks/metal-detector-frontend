export type RestRoute = {
  name: string
  path: string
}

export const login = { name: 'Login', path: '/rest/v1/login' }
export const myArtists = { name: 'My Artists', path: '/rest/v1/my-artists' }
export const releases = { name: 'Releases', path: '/rest/v1/releases' }
