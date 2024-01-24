export default function TimelineCard({ date, title, description }) {
  return (
    <>
      <div className='absolute size-3 rounded-full mt-1.5 -start-1.5 border  border-white bg-gray-200' />
      <time className='mb-1 text-sm font-normal leading-none text-yellow-200/90 '>
        {date}
      </time>
      <h3 className='text-lg font-semibold text-violet-300/90 mt-2'>
        {title}
      </h3>
      <p className='mb-4 text-base font-normal text-gray-100 text-pretty'>
        {description}
      </p>
    </>
  )
}
