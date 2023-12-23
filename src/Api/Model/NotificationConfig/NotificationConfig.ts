export type NotificationConfig = {
  readonly emailConfig: DefaultNotificationConfig
  readonly telegramConfig: TelegramNotificationConfig
}

export type DefaultNotificationConfig = {
  readonly frequencyInWeeks: number
  readonly notificationAtReleaseDate: boolean
  readonly notificationAtAnnouncementDate: boolean
  readonly notifyReissues: boolean
}

export interface TelegramNotificationConfig extends DefaultNotificationConfig {
  readonly notificationsActivated: boolean
  readonly registrationId: number
}

export interface UpdateNotificationConfigRequest extends DefaultNotificationConfig {
  readonly channel: NotificationChannel
}

export enum NotificationChannel {
  EMAIL = 'EMAIL',
  TELEGRAM = 'TELEGRAM',
}
