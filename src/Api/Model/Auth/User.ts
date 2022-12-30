import { UserRole } from './UserRole'

export class User {
  username = ''
  roles: string[] = []

  constructor(username: string, roles: string[]) {
    this.username = username
    this.roles = roles
  }

  isUser() {
    return this.roles.includes(UserRole.User)
  }

  isAdmin() {
    return this.roles.includes(UserRole.Administrator)
  }
}
