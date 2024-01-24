import { FaGithub } from 'react-icons/fa6'
import { RiGlobalLine } from 'react-icons/ri'

export default function ProjectButton({ title, url }) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 text-white shadow-sm shadow-white/20 hover:bg-white/10 hover:scale-105 transition cursor-pointer'
    >
      {title === 'Ver código fuente' && <FaGithub className='text-white' />}
      {title === 'Ir al sitio web' && <RiGlobalLine className='text-white' />}
      {title}
    </a>
  )
}
