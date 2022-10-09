import dayjs from 'dayjs'

function useDaysJs(): string[] {
  const today = dayjs()
  const inOneMonth = today.add(1, 'month')
  const oneMonthAgo = today.subtract(1, 'month')
  return [today.format(DateFormat.UTC), inOneMonth.format(DateFormat.UTC), oneMonthAgo.format(DateFormat.UTC)]
}

enum DateFormat {
  UTC = 'YYYY-MM-DD',
}

export default useDaysJs
