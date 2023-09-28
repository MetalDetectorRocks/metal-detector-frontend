import { ImportDetailsState } from './ImportDetailsState'

export type ImportDetails = {
  readonly totalCountRequested: number
  readonly totalCountImported: number
  readonly startTime: string
  readonly endTime: string
  readonly durationInSeconds: number
  readonly state: ImportDetailsState
  readonly source: string
}
