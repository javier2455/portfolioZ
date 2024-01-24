// import Badge from './components/Badge/Badge'
import Layout from './layout/Layout'
import Personal from './assets/person.jpg'
import {
  /* FaGithub, FaLinkedin */ FaCode,
  FaHandPeace,
  FaSuitcase,
} from 'react-icons/fa6'
import CVButton from './components/Button/CVButton'
// import SocialBadge from './components/Badge/SocialBadge'
import TimelineContainer from './components/TimeLine/TimelineContainer'
import SectionContainer from './components/Section/SectionContainer'
import Projects from './components/Projects/Projects'

export default function App() {
  return (
    <Layout>
      <main className='px-4'>
        <SectionContainer id={'top'} styles={'py-36'}>
          <img
            src={Personal}
            className='rounded-full size-16 mb-4'
            alt='personal photo'
          />
          <h1 className='text-white text-2xl md:text-3xl lg:text-5xl font-bold pb-4 flex flex-row gap-x-4'>
            Hey you, soy Javier
            <div className='flex justify-center items-end'>
              <FaHandPeace className='text-white text-3xl mb-1' />
              {/* <Badge title={'Disponible para trabajar'} />{' '} */}
            </div>
          </h1>
          <h2 className='text-white text-2xl text-wrap w-full max-w-[500px] md:max-w-[640px]'>
            <span>+3 años de experiencia.</span>{' '}
            <span className='text-violet-300/90 font-semibold'>
              Desarrollador Web, Fronted y Backend.
            </span>{' '}
            <span className='text-violet-100/90'> De La Habana, Cuba.</span>{' '}
          </h2>
          {/* <nav className='flex justify-between items-center mt-4 w-full md:w-[640px]'>
            <div className='flex sm:flex-row gap-4 flex-wrap'>
              <SocialBadge>
                <FaGithub className='size-6 text-white' />
                Github
              </SocialBadge>
              <SocialBadge>
                <FaLinkedin className='size-6 text-white' />
                Linkedin
              </SocialBadge>
            </div>
          </nav> */}
          <div className='mt-4'>
            <CVButton />
          </div>
        </SectionContainer>
        <SectionContainer id={'experience'} styles={'py-20'}>
          <h2 className='text-2xl font-semibold mb-6 text-white flex gap-x-3 items-center'>
            <FaSuitcase className='size-6' />
            Experiencia Laboral
          </h2>
          <TimelineContainer />
        </SectionContainer>
        <SectionContainer id={'projects'} styles={'py-20'}>
          <h2 className='text-2xl font-semibold mb-6 text-white flex gap-x-3 items-center'>
            <FaCode className='size-6' />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>
      </main>
    </Layout>
  )
}
