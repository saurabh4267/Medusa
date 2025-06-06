import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='text-center text-sm'>Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free.</p>
      <div className='flex gap-4 w-full sm:justify-center pt-5 overflow-scroll'>
        {specialityData.map((item, index) => (
          <Link onClick={()=> scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-20px] transition-all duration-300' key={index} to={`/doctors/${item.speciality}`}>
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
