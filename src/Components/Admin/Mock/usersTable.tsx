import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Chip } from '@mui/material'
import UserNameCellRenderer from '../User/UserNameCellRenderer'

enum UserType {
  NATIVE = 'Native',
  OAUTH = 'OAuth',
}

enum UserRole {
  ADMIN = 'Admin',
  USER = 'User',
}

enum UserStatus {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
}

type User = {
  id: number
  username: string
  email: string
  type: UserType
  role: UserRole
  status: UserStatus
  lastLogin: string
  creationDate: string
}

export const columns = [
  {
    name: 'User',
    cell: (user: User) => <UserNameCellRenderer username={user.username} email={user.email} />,
    selector: (user: User) => user.username,
    sortable: true,
  },
  {
    name: 'Type',
    cell: (user: User) => <Chip label={user.type} size="small" color={evalTypeColor(user.type)} variant={'filled'} />,
    selector: (row: User) => row.type,
    sortable: true,
    width: '13%',
  },
  {
    name: 'Role',
    cell: (user: User) => <Chip label={user.role} size="small" color={evalRoleColor(user.role)} variant={'filled'} />,
    selector: (user: User) => user.role,
    sortable: true,
    width: '13%',
  },
  {
    name: 'Status',
    cell: (user: User) => (
      <Chip label={user.status} size="small" color={evalStatusColor(user.status)} variant={'filled'} />
    ),
    selector: (user: User) => user.status,
    sortable: true,
    width: '13%',
  },
  {
    name: 'Last Login',
    selector: (user: User) => user.lastLogin,
    sortable: true,
    width: '13%',
  },
  {
    name: 'Creation date',
    selector: (user: User) => user.creationDate,
    sortable: true,
    width: '13%',
  },
  {
    cell: () => <MoreVertIcon fontSize={'small'} />,
    allowOverflow: true,
    button: true,
    width: '5%',
  },
]

function evalTypeColor(type: UserType): 'success' | 'info' {
  switch (type) {
    case UserType.NATIVE:
      return 'success'
    case UserType.OAUTH:
      return 'info'
  }
}

function evalStatusColor(status: UserStatus): 'success' | 'error' {
  switch (status) {
    case UserStatus.ENABLED:
      return 'success'
    case UserStatus.DISABLED:
      return 'error'
  }
}

function evalRoleColor(role: UserRole): 'warning' | 'info' {
  switch (role) {
    case UserRole.ADMIN:
      return 'warning'
    case UserRole.USER:
      return 'info'
  }
}

export const data: User[] = [
  {
    id: 1,
    username: 'DanielW',
    email: 'danielw@example.com',
    type: UserType.NATIVE,
    role: UserRole.ADMIN,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 2,
    username: 'NilsD',
    email: 'nilsd@example.com',
    type: UserType.NATIVE,
    role: UserRole.ADMIN,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 3,
    username: 'DanielW',
    email: 'danielw@example.com',
    type: UserType.NATIVE,
    role: UserRole.ADMIN,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 4,
    username: 'NilsD',
    email: 'nilsd@example.com',
    type: UserType.NATIVE,
    role: UserRole.USER,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 5,
    username: 'DanielW',
    email: 'danielw@example.com',
    type: UserType.NATIVE,
    role: UserRole.USER,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 6,
    username: 'NilsD',
    email: 'nilsd@example.com',
    type: UserType.NATIVE,
    role: UserRole.USER,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 7,
    username: 'DanielW',
    email: 'danielw@example.com',
    type: UserType.OAUTH,
    role: UserRole.ADMIN,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 8,
    username: 'NilsD',
    email: 'nilsd@example.com',
    type: UserType.OAUTH,
    role: UserRole.ADMIN,
    status: UserStatus.ENABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 9,
    username: 'DanielW',
    email: 'danielw@example.com',
    type: UserType.OAUTH,
    role: UserRole.ADMIN,
    status: UserStatus.DISABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 10,
    username: 'NilsD',
    email: 'nilsd@example.com',
    type: UserType.OAUTH,
    role: UserRole.ADMIN,
    status: UserStatus.DISABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 11,
    username: 'DanielW',
    email: 'danielw@example.com',
    type: UserType.NATIVE,
    role: UserRole.ADMIN,
    status: UserStatus.DISABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
  {
    id: 12,
    username: 'NilsD',
    email: 'nilsd@example.com',
    type: UserType.NATIVE,
    role: UserRole.ADMIN,
    status: UserStatus.DISABLED,
    lastLogin: '2022-09-11',
    creationDate: '2021-02-07',
  },
]
