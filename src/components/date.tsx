import { format, parseISO } from 'date-fns'

const Date = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy/MM/dd')}</time>
}

export default Date
