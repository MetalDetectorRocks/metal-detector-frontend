import { useQuery } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import useApiWithToken from '../Auth/useApiWithToken'
import { DefaultNotificationConfig, NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'

export type FetchNotificationConfigProps = {
  channel: NotificationChannel
}

const useFetchNotificationConfig = (props: FetchNotificationConfigProps) => {
  const API = useApiWithToken()
  const query = useQuery('notification-config', () => {
    return API.get<DefaultNotificationConfig>(
      `${REST_ROUTES.notificationConfig}/${props.channel.valueOf().toLowerCase()}`,
    )
  })

  return {
    notificationConfig: query.data?.data,
    isLoading: query.isLoading,
    error: query.error as AxiosError<ErrorResponse>,
  }
}

export default useFetchNotificationConfig
