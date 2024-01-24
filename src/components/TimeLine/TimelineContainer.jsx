import { EXPERIENCE_DATA } from '../../constants'
import TimelineCard from './TimelineCard'

export default function TimelineContainer() {
  return (
    <ol className='relative border-s border-gray-200 ml-3'>
      {EXPERIENCE_DATA.map((el) => (
        <li key={el.id} className='mb-10 ms-4'>
          <TimelineCard
            {...el}
          />
        </li>
      ))}
    </ol>
  )
}
