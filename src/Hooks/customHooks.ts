import dayjs from 'dayjs'

function useDaysJs(): string[] {
  const inOneMonth = dayjs().add(1, 'month').format(DateFormat.UTC)
  const oneMonthAgo = dayjs().subtract(1, 'month').format(DateFormat.UTC)
  const today = dayjs().format(DateFormat.UTC)
  return [today, inOneMonth, oneMonthAgo]
}

enum DateFormat {
  UTC = 'YYYY-MM-DD',
}

export default useDaysJs
