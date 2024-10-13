import { ItemsPerMonth } from '@/Api/Model/Statistics/StatisticsResponse'

export function mapData(responseData: ItemsPerMonth | undefined): {}[] {
  if (!responseData) {
    return []
  }

  return Object.entries(responseData).map((value) => {
    return {
      yearMonth: value[0],
      count: value[1],
    }
  })
}
