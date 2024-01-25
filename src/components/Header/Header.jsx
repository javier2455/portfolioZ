import { FaCode, FaSuitcase, FaUser } from 'react-icons/fa6'
import { IoMail } from "react-icons/io5";

export default function Header() {
  return (
    <header className='flex justify-center items-center py-6 w-full xl:max-w-[1120px] mx-auto'>
      <nav className='hidden sm:flex flex-row gap-x-10 opacity-80 px-4 py-2 rounded-full bg-slate-950 text-white'>
        <a className='' href='#experience'>
          Experiencia
        </a>
        <a className='' href='#projects'>
          Proyectos
        </a>
        <a className='' href='#about-me'>
          Sobre mi
        </a>
        <a className='' href='#contact'>
          Contacto
        </a>
      </nav>
      <nav className='flex flex-row sm:hidden gap-x-10 opacity-80 px-4 py-2 rounded-full bg-slate-950 text-white'>
        <a className='' href='#experience'>
          <FaSuitcase className='text-white' />
        </a>
        <a className='' href='#projects'>
          <FaCode className='text-white' />
        </a>
        <a className='' href='#about-me'>
          <FaUser className='text-white' />
        </a>
        <a className='' href='#contact'>
          <IoMail className='text-white' />
        </a>
      </nav>
    </header>
  )
}
