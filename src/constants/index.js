import { FaReact } from 'react-icons/fa6'
import { SiTailwindcss } from 'react-icons/si'
import project1Img from '../assets/easy2art.webp'
import project2Img from '../assets/rentHouses.webp'

export const EXPERIENCE_DATA = [
  {
    id: 1,
    date: 'Noviembre 2020 - Actualidad',
    title: 'ONAT - Oficina Nacional de Administración Tributaria',
    description:
      'Desarrollador Frontend y Backend en diversos proyectos para la institución, desde sistemas estadísticos, de documentación, entre otros. React, Node y C# como tecnologías de desarrollo.'
  },
  {
    id: 2,
    date: 'Marzo 2023 - Agosto 2023',
    title: 'Aicros - Empresa',
    description:
      'Desarrollador Frontend en 3 módulos para la gestión de tareas para proyectos de 3eros. Angular y NestJs como tecnologías de desarrollo.'
  }
]

export const TAGS = {
  REACT: {
    name: 'React',
    class: 'bg-blue-950 text-white',
    icon: FaReact
  },
  TAILWINDCSS: {
    name: 'Tailwind CSS',
    class: 'bg-white text-sky-600',
    icon: SiTailwindcss
  },
  KEEP_REACT: {
    name: 'Keep React',
    class: 'bg-slate-900 text-sky-200',
    icon: FaReact
  }
}

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Easy2Art',
    description:
      'Catálogo de diversos servicios de trabajos con madera, pladur para exteriores, interiores, entre otra gama de ofertas varias pensadas en nuestros clientes',
    link: 'https://javier2455.github.io/easy2art/#/',
    github: 'https://github.com/javier2455/easy2art',
    image: project1Img,
    tags: [TAGS.REACT, TAGS.TAILWINDCSS]
  },
  {
    id: 2,
    title: 'Rent Houses - App',
    description:
      'Aplicación para la renta de casas o apartamentos. (Aún en desarrollo)',
    link: 'https://javier2455.github.io/rent-houses/#/',
    github: 'https://github.com/javier2455/rent-houses',
    image: project2Img,
    tags: [TAGS.REACT, TAGS.TAILWINDCSS, TAGS.KEEP_REACT]
  }
]
