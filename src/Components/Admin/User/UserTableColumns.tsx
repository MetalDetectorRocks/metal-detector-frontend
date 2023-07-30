import EditIcon from '@mui/icons-material/Edit'
import { Chip } from '@mui/material'
import UserNameCellRenderer from './UserNameCellRenderer'
import IconButton from '@mui/material/IconButton'
import { UserDetails } from '../../../Api/Model/User/UserDetails'
import { UserRole } from '../../../Api/Model/User/UserRole'

export const columns = [
  {
    name: 'User',
    cell: (user: UserDetails) => <UserNameCellRenderer username={user.username} email={user.email} />,
    sortable: true,
  },
  {
    name: 'Type',
    cell: (user: UserDetails) => (
      <Chip
        label={user.nativeUser ? 'Native' : 'OAuth'}
        size="small"
        color={user.nativeUser ? 'success' : 'info'}
        variant={'filled'}
      />
    ),
    sortable: true,
    width: '13%',
  },
  {
    name: 'Role',
    cell: (user: UserDetails) => (
      <Chip label={user.role} size="small" color={evalRoleColor(user.role)} variant={'filled'} />
    ),
    sortable: true,
    width: '13%',
  },
  {
    name: 'Status',
    cell: (user: UserDetails) => (
      <Chip
        label={user.enabled ? 'Enabled' : 'Disabled'}
        size="small"
        color={user.enabled ? 'success' : 'error'}
        variant={'filled'}
      />
    ),
    sortable: true,
    width: '13%',
  },
  {
    name: 'Last Login',
    selector: (user: UserDetails) => new Date(user.lastLogin).toLocaleDateString('sv'),
    sortable: true,
    width: '13%',
  },
  {
    name: 'Creation date',
    selector: (user: UserDetails) => new Date(user.createdDateTime).toLocaleDateString('sv'),
    sortable: true,
    width: '13%',
  },
  {
    cell: (user: UserDetails) => (
      <IconButton color={'secondary'} onClick={() => console.log(user.username)}>
        <EditIcon />
      </IconButton>
    ),
    allowOverflow: true,
    button: true,
    width: '5%',
  },
]

function evalRoleColor(role: UserRole): 'warning' | 'info' {
  switch (role) {
    case UserRole.Administrator:
      return 'warning'
    case UserRole.User:
      return 'info'
  }
}
