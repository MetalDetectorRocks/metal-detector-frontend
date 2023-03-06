export type CurrentUserDetailsResponse = {
  readonly publicId: string
  readonly username: string
  readonly email: string
  readonly enabled: boolean
  readonly role: string
  readonly lastLogin: string
  readonly createdBy: string
  readonly createdDateTime: string
  readonly lastModifiedDateTime: string
  readonly lastModifiedBy: string
  readonly nativeUser: boolean
}
