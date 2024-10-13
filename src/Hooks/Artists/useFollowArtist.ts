import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from '@tanstack/react-query'

export type FollowArtistProps = {
  source: string
  externalId: string
  type: 'FOLLOW' | 'UNFOLLOW'
}

const useFollowArtist = () => {
  const API = useApiWithToken()
  const {
    mutate: followArtist,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (props: FollowArtistProps) => {
      const route = props.type === 'FOLLOW' ? REST_ROUTES.followArtist : REST_ROUTES.unfollowArtist
      return API.post(`${route}/${props.source}/${props.externalId}`)
    },
  })

  return {
    followArtist,
    isError,
    isSuccess,
  }
}

export default useFollowArtist
