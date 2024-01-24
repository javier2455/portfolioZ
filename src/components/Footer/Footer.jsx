export default function Footer() {
  return (
    <footer className='bg-black/20 backdrop-blur-lg rounded-lg shadow w-full xl:max-w-[1120px] mx-auto'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-violet-300/90 sm:text-center font-semibold'>
          © 2024{' '}
          <a href='https://flowbite.com/' className='hover:underline'>
            Javier Aleaga García
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className='flex flex-wrap gap-x-4 items-center mt-3 text-sm font-medium text-white/90 sm:mt-0'>
          <li>
            <a href='#experience' className=''>
              Experiencia
            </a>
          </li>
          <li>
            <a href='#projects' className=''>
              Proyectos
            </a>
          </li>
          <li>
            <a href='#about-me' className=''>
              Sobre mi
            </a>
          </li>
          <li>
            <a href='#contact' className=''>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
