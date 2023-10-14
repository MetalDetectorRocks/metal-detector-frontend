import { ItemsPerMonth } from './StatisticsResponse'

export type UserInfo = {
  readonly usersPerMonth: ItemsPerMonth
  readonly totalUsers: number
  readonly newThisMonth: number
}
