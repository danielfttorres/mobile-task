// @flow
import Moment from 'moment'
import R from 'ramda'

const _formatDate = (date) => Moment(date).format('YYYY-MM-DD')

const groupItemsByPublicationDate = R.groupBy(item => _formatDate(item.publishedAt))

const getDayTitle = (date: string) => {
  const formattedDefaultDate = Moment(date).format('MMMM Do')
  const dateDiff = Moment().diff(date, 'days')
  const isDayToday = (dateDiff < 1)
  const isDayYesterday = (dateDiff >= 1 && dateDiff < 2)

  if (isDayToday) {
    return 'Today'
  } else if (isDayYesterday) {
    return 'Yesterday'
  } else {
    return formattedDefaultDate
  }
}

export {
  groupItemsByPublicationDate,
  getDayTitle
}