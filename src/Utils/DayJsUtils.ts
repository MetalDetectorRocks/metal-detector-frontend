import dayjs, { UnitType } from 'dayjs'

export function formatRelativeInDays(date: string) {
  if (date === today()) {
    return 'today'
  } else if (date === tomorrow()) {
    return 'tomorrow'
  } else if (date === yesterday()) {
    return 'yesterday'
  } else {
    const relativeDisplayString = dayjs(date).fromNow()
    const hoursFromNow = Math.abs(diffFromNow(date, 'hour'))
    if (relativeDisplayString.match(/in a day/)) {
      return 'in 2 days'
    } else if (relativeDisplayString.match(/in \d* days/)) {
      const daysFromNow = Math.ceil(hoursFromNow / 24)
      return `in ${daysFromNow} days`
    } else if (relativeDisplayString.match(/\d days ago/)) {
      const daysFromNow = Math.floor(hoursFromNow / 24)
      return `${daysFromNow} days ago`
    } else {
      return relativeDisplayString
    }
  }
}

export function format(dateStr: string, dateFormat: DateFormat): string {
  return dayjs(dateStr).format(dateFormat)
}

export function today(): string {
  const todayAsDayJs = dayjs()
  return format(todayAsDayJs.toString(), DateFormat.UTC)
}

export function yesterday(): string {
  const yesterdayAsDayJs = dayjs().subtract(1, 'day')
  return format(yesterdayAsDayJs.toString(), DateFormat.UTC)
}

export function tomorrow(): string {
  const yesterdayAsDayJs = dayjs().add(1, 'day')
  return format(yesterdayAsDayJs.toString(), DateFormat.UTC)
}

export function inAMonth(): string {
  const inAMonthAsDayJs = dayjs().add(1, 'month')
  return format(inAMonthAsDayJs.toString(), DateFormat.UTC)
}

export function beforeAMonth(): string {
  const beforeAMonth = dayjs().subtract(1, 'month')
  return format(beforeAMonth.toString(), DateFormat.UTC)
}

export function compare(dateStr1: string, dateStr2: string): number {
  return dayjs(dateStr1).isBefore(dateStr2) ? -1 : dayjs(dateStr2).isBefore(dateStr1) ? 1 : 0
}

function diffFromNow(dateStr: string, unit: UnitType): number {
  const date = dayjs(dateStr)
  const now = dayjs()
  return now.diff(date, unit)
}

export enum DateFormat {
  LONG = 'MMMM Do YYYY',
  LONG_WITH_TIME = 'MMMM Do YYYY, h:mm:ss a',
  SHORT = 'MMM Do YYYY',
  SHORT_WITH_TIME = 'MMM Do YY, h:mm:ss a',
  UTC = 'YYYY-MM-DD',
}
