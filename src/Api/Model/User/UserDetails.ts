import { UserRole } from './UserRole'

export type UserDetails = {
  readonly publicId: string
  readonly username: string
  readonly email: string
  readonly enabled: boolean
  readonly role: UserRole
  readonly nativeUser: boolean
  readonly lastLogin: string
  readonly createdDateTime: string
}
