import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AnimalLeft({image,name,sciName,endangered, popultaion, weight, size, link}:{[key: string]:string}) {

  const [overClass, setHoverClass] = useState('-left-full')

  return (
    <div className=' 2xl:my-20 flex items-center'>
      <div className={`duration-200 absolute 2xl:w-250 w-144 2xl:h-128 h-100  bg-opacity-50 bg-neutral-800 flex justify-center items-center ${overClass}`}
      onMouseOut={() => setHoverClass('-left-full')} onMouseOver={() => setHoverClass('left-0')}>
        <Link onClick={() => window.scrollTo(0, 0)} className='w-full h-full flex justify-center items-center' to={link}>
            <div className='text-5xl font-semibold text-emerald-50'>{name}</div>
        </Link>
      </div>
        
      <img src={`Images/${image}`} className='object-cover 2xl:h-128 2xl:w-250 h-100 w-144' alt="animal image" 
      onMouseOver={() => setHoverClass('left-0')}/>
      <div className='m-16 w-fit text-lg'>
        <h1 className='text-3xl font font-semibold ml-3'>
          {name}
          <div className='h-px mb-2.5 mt-3 bg-gray-300'></div>
        </h1>
        <div className='mt-4'>
          <div className='flex items-center'>
            <img className='h-16 mr-2' src="Icons/name.svg" alt="nametag" />
            <div>
              <div className='font-semibold'>Wissenschaftlicher Name</div>
              <div>{sciName}</div>
            </div>
          </div>
          <div className='flex my-5 items-center'>
            <img className='h-16 mr-2 p-3' src="Icons/warning.svg" alt="nametag" />
            <div>
              <div className='font-semibold'>Gefährdungsstatus (IUCN)</div>
              <div>{endangered}</div>
            </div>
          </div>
          <div className='flex my-5 items-center'>
            <img className='h-16 mr-2 p-1' src="Icons/popultaion.svg" alt="nametag" />
            <div>
              <div className='font-semibold'>Population</div>
              <div>{popultaion}</div>
            </div>
          </div>
          <div className='flex my-5 items-center'>
            <img className='h-16 mr-2 p-1.5' src="Icons/ruler.svg" alt="nametag" />
            <div>
              <div className='font-semibold'>Körpergrösse</div>
              <div>{`Gewicht: ${weight}`}</div>
              <div>{`Grösse: ${size}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
