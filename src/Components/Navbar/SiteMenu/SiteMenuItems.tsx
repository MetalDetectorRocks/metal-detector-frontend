import { blog, dashboard, home, myArtists, releases } from '@/Router/InternalRoutes'
import Home from '@mui/icons-material/Home'
import Dashboard from '@mui/icons-material/Dashboard'
import Article from '@mui/icons-material/Article'
import Album from '@mui/icons-material/Album'
import LibraryMusic from '@mui/icons-material/LibraryMusic'
import NavItem from '../../Common/Menu/NavItem/NavItem'

export type SiteMenuItemsProps = {
  authenticated: boolean
}

const SiteMenuItems = (props: SiteMenuItemsProps) => {
  return (
    <>
      {!props.authenticated && (
        <NavItem name={home.name} path={home.path} icon={<Home fontSize="small" color={'secondary'} />} />
      )}
      {props.authenticated && (
        <NavItem
          name={dashboard.name}
          path={dashboard.path}
          icon={<Dashboard fontSize="small" color={'secondary'} />}
        />
      )}
      <NavItem name={blog.name} path={blog.path} icon={<Article fontSize="small" color={'secondary'} />} />
      {props.authenticated && (
        <NavItem
          name={myArtists.name}
          path={myArtists.path}
          icon={<LibraryMusic fontSize="small" color={'secondary'} />}
        />
      )}
      <NavItem name={releases.name} path={releases.path} icon={<Album fontSize="small" color={'secondary'} />} />
    </>
  )
}

export default SiteMenuItems
