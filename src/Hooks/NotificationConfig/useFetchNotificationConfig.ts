import { useQuery } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import useApiWithToken from '../Auth/useApiWithToken'
import { DefaultNotificationConfig, NotificationChannel } from '../../Api/Model/NotificationConfig/NotificationConfig'

export type FetchNotificationConfigProps = {
  channel: NotificationChannel
}

const useFetchNotificationConfig = (props: FetchNotificationConfigProps) => {
  const API = useApiWithToken()
  return useQuery(['notification-config', props.channel], async () => {
    return await API.get<DefaultNotificationConfig>(
      `${REST_ROUTES.notificationConfig}/${props.channel.valueOf().toLowerCase()}`,
    )
  })
}

export default useFetchNotificationConfig
