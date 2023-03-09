import classes from './AdminSideMenu.module.scss'
import { Divider, Drawer, List, Toolbar } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import AlbumIcon from '@mui/icons-material/Album'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'
import {
  adminDashboard,
  adminNotifications,
  adminReleaseDenyList,
  adminReleaseImport,
  adminReleasesList,
  adminUsersList,
} from '../../../../Router/InternalRoutes'
import SideMenuItem from './SideMenuItem'

const AdminSideMenu = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List className={classes['side-menu']}>
        <SideMenuItem
          name={adminDashboard.name}
          path={adminDashboard.path}
          icon={<DashboardIcon color={'secondary'} fontSize={'small'} />}
        ></SideMenuItem>
        <h2 className={classes['side-menu__section-heading']}>Releases</h2>
        <SideMenuItem
          name={adminReleasesList.name}
          path={adminReleasesList.path}
          icon={<AlbumIcon color={'secondary'} fontSize={'small'} />}
        ></SideMenuItem>
        <SideMenuItem
          name={adminReleaseImport.name}
          path={adminReleaseImport.path}
          icon={<ImportExportIcon color={'secondary'} fontSize={'small'} />}
        ></SideMenuItem>
        <SideMenuItem
          name={adminReleaseDenyList.name}
          path={adminReleaseDenyList.path}
          icon={<DoDisturbIcon color={'secondary'} fontSize={'small'} />}
        ></SideMenuItem>
        <h2 className={classes['side-menu__section-heading']}>Users</h2>
        <SideMenuItem
          name={adminUsersList.name}
          path={adminUsersList.path}
          icon={<GroupIcon color={'secondary'} fontSize={'small'} />}
        ></SideMenuItem>
        <SideMenuItem
          name={adminNotifications.name}
          path={adminNotifications.path}
          icon={<NotificationsActiveIcon color={'secondary'} fontSize={'small'} />}
        ></SideMenuItem>
      </List>
    </Drawer>
  )
}

export default AdminSideMenu
