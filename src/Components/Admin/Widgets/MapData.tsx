import { ItemsPerMonth } from '../../../Api/Model/Statistics/StatisticsResponse'

export function mapData(responseData: ItemsPerMonth[] | undefined): {}[] {
  if (responseData === undefined || responseData === null) {
    return []
  }

  return Object.entries(responseData).map((value: [string, ItemsPerMonth]) => {
    return {
      yearMonth: value[0],
      count: value[1],
    }
  })
}
