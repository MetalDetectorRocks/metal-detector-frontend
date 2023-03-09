import classes from './AdminSideMenu.module.scss'
import { Divider, Drawer, List, Toolbar } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import AlbumIcon from '@mui/icons-material/Album'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import Notifications from '@mui/icons-material/Notifications'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'
import {
  adminDashboard,
  adminNotifications,
  adminReleaseDenyList,
  adminReleaseImport,
  adminReleasesList,
  adminUsersList,
} from '../../../../Router/InternalRoutes'
import NavItem from '../../../Common/NavItem/NavItem'

const AdminSideMenu = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List className={classes['side-menu']}>
        <NavItem
          name={adminDashboard.name}
          path={adminDashboard.path}
          icon={<DashboardIcon color={'secondary'} fontSize={'small'} />}
        ></NavItem>
        <h2 className={classes['side-menu__section-heading']}>Releases</h2>
        <NavItem
          name={adminReleasesList.name}
          path={adminReleasesList.path}
          icon={<AlbumIcon color={'secondary'} fontSize={'small'} />}
        ></NavItem>
        <NavItem
          name={adminReleaseImport.name}
          path={adminReleaseImport.path}
          icon={<ImportExportIcon color={'secondary'} fontSize={'small'} />}
        ></NavItem>
        <NavItem
          name={adminReleaseDenyList.name}
          path={adminReleaseDenyList.path}
          icon={<DoDisturbIcon color={'secondary'} fontSize={'small'} />}
        ></NavItem>
        <h2 className={classes['side-menu__section-heading']}>Users</h2>
        <NavItem
          name={adminUsersList.name}
          path={adminUsersList.path}
          icon={<GroupIcon color={'secondary'} fontSize={'small'} />}
        ></NavItem>
        <NavItem
          name={adminNotifications.name}
          path={adminNotifications.path}
          icon={<Notifications fontSize="small" color={'secondary'} />}
        ></NavItem>
      </List>
    </Drawer>
  )
}

export default AdminSideMenu
