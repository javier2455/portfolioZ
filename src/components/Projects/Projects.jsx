import { PROJECTS_DATA } from '../../constants'
import ProjectButton from '../Button/ProjectButton'

export default function Projects() {
  return (
    <div>
      {PROJECTS_DATA.map((p) => (
        <article className='py-6' key={p.id}>
          <h3 className='text-2xl font-semibold text-violet-300/90 mb-2'>
            {p.title}
          </h3>
          <p className='text-lg mb-4 text-pretty text-white'>{p.description}</p>
          <ul className='flex gap-x-4 flex-row mb-2'>
            {p.tags.map((t) => (
              <li className='text-white' key={t.name}>
                <span
                  className={`${t.class} flex gap-x-2 rounded-full text-xs py-1 px-2`}
                >
                  <t.icon className='size-4' />
                  {t.name}
                </span>
              </li>
            ))}
          </ul>
          <img
            className='rounded shadow-xl shadow-white/20'
            src={p.image}
            alt={`Captura de pantalla del proyecto: ${p.title}`}
          />
          <div className='flex flex-row items-center gap-x-4 mt-4'>
            <ProjectButton title={'Ver código fuente'} url={p.github} />
            <ProjectButton title={'Ir al sitio web'} url={p.link} />
          </div>
        </article>
      ))}
    </div>
  )
}
