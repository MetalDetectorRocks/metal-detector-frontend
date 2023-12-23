export type NotificationConfig = {
  readonly frequencyInWeeks: number
  readonly notificationAtReleaseDate: boolean
  readonly notificationAtAnnouncementDate: boolean
  readonly notifyReissues: boolean
}

export interface UpdateNotificationConfigRequest extends NotificationConfig {
  readonly channel: NotificationChannel
}

export enum NotificationChannel {
  EMAIL = 'EMAIL',
  TELEGRAM = 'TELEGRAM',
}
