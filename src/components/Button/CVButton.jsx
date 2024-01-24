import {FaFileArrowDown} from 'react-icons/fa6'

export default function CVButton() {
  return (
    <button className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 text-white shadow-sm shadow-white/20 hover:bg-white/10 hover:scale-105 transition cursor-pointer'>
      <FaFileArrowDown className='text-white'/>
      Descargar CV
    </button>
  )
}
