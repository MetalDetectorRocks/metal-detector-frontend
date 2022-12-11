export type ErrorResponse = {
  readonly timestamp: Date
  readonly status: number
  readonly error: string
  readonly messages: string[]
}
