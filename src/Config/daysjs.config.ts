import relativeTime from 'dayjs/plugin/relativeTime'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'

const configureDaysJs = () => {
  dayjs.extend(relativeTime)
  dayjs.extend(advancedFormat)
}

export default configureDaysJs
