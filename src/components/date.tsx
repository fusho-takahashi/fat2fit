import { format, parseISO } from 'date-fns'

const Date = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyy')}</time>
}

export default Date
