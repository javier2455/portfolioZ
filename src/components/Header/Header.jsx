export default function Header() {
  return (
    <header className='flex justify-center items-center py-6 w-full xl:max-w-[1120px] mx-auto'>
      <nav className='flex flex-row gap-x-10 opacity-80 px-4 py-2 rounded-full bg-slate-950 text-white'>
        <a className="" href='#experience'>Experiencia</a>
        <a className="" href='#projects'>Proyectos</a>
        <a className="" href='#about-me'>Sobre mi</a>
        <a className="" href='#contact'>Contacto</a>
      </nav>
    </header>
  )
}
