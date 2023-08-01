import { ArtistSearchResultEntry } from '../../../Api/Model/Artist/ArtistSearchResultEntry'
import { Card, CardContent, CardMedia } from '@mui/material'
import classes from './SearchResultItem.module.scss'
import FollowingInfo from './FollowingInfo'
import GenreBadges from './GenreBadges'
import Box from '@mui/material/Box'
import FollowIcon from './FollowIcon'
import unknown from './../../../assets/img/unknown-img.jpg'

export type SearchResultItemProps = {
  artist: ArtistSearchResultEntry
}

const SearchResultItem = (props: SearchResultItemProps) => {
  return (
    <Card className={classes['search-result-item']}>
      <Box className={classes['search-result-item__image']}>
        <CardMedia
          component="img"
          image={props.artist.smallImage ? props.artist.smallImage : unknown}
          alt={props.artist.name}
        ></CardMedia>
      </Box>
      <CardContent className={classes['search-result-item__content']}>
        <h3 className={classes['search-result-item__artist-name']}>
          {props.artist.name.trim().length > 40
            ? props.artist.name.trim().substring(0, 40).trim().concat('...')
            : props.artist.name.trim()}
        </h3>
        <GenreBadges genres={props.artist.genres} />
        <FollowingInfo follower={props.artist.metalDetectorFollower} />
      </CardContent>
      <CardContent className={classes['search-result-item__follow-icon']}>
        <FollowIcon followed={props.artist.followed} source={props.artist.source} externalId={props.artist.id} />
      </CardContent>
    </Card>
  )
}

export default SearchResultItem
