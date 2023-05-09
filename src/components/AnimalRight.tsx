import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AnimalRight({image,name,sciName,endangered, popultaion, weight, size, link}:{[key: string]:string}) {

  const [overClass, setHoverClass] = useState('-right-full')

  return (
    <div className=' 2xl:my-20 xl:flex items-center xl:flex-row-reverse w-full'>
      <div className={`duration-200 absolute 2xl:w-250 md:w-144 w-full 2xl:h-128 sm:h-100 xs:h-80 h-64  bg-opacity-50 bg-neutral-800 flex justify-center items-center ${overClass}`}
      onMouseOut={() => setHoverClass('-right-full')} onMouseOver={() => setHoverClass('right-0')}>
        <Link onClick={() => window.scrollTo(0, 0)} className='w-full h-full flex justify-center items-center' to={link}>
            <div className='text-5xl font-semibold text-emerald-50'>{name}</div>
        </Link>
      </div>

      <div className='w-full flex md:justify-end'>
        <img src={`Images/${image}`} className='object-cover xl:my-16 2xl:h-128 sm:h-100 xs:h-80 h-64 2xl:w-250 md:w-144 w-full' alt="animal image" 
        onMouseOver={() => setHoverClass('right-0')}/>  
      </div>

      <div className='xl:w-fit w-full xl:inline-block flex justify-end'>
        <div className='m-16 2xl:ml-52 xl:ml-32 w-fit sm:text-lg'>
          <h1 className='sm:text-3xl text-2xl font font-semibold ml-3'>
            {name}
            <div className='h-px mb-2.5 mt-3 bg-gray-300'></div>
          </h1>
          <div className='mt-4'>
            <div className='flex items-center'>
              <img className='sm:h-16 h-14 mr-2' src="Icons/name.svg" alt="nametag" />
              <div>
                <div className='font-semibold'>Wissenschaftlicher Name</div>
                <div>{sciName}</div>
              </div>
            </div>
            <div className='flex my-5 items-center'>
              <img className='sm:h-16 h-14 mr-2 p-3' src="Icons/warning.svg" alt="nametag" />
              <div>
                <div className='font-semibold'>Gefährdungsstatus (IUCN)</div>
                <div>{endangered}</div>
              </div>
            </div>
            <div className='flex my-5 items-center'>
              <img className='sm:h-16 h-14 mr-2 p-1' src="Icons/popultaion.svg" alt="nametag" />
              <div>
                <div className='font-semibold'>Population</div>
                <div>{popultaion}</div>
              </div>
            </div>
            <div className='flex my-5 items-center'>
              <img className='sm:h-16 h-14 mr-2 p-1.5' src="Icons/ruler.svg" alt="nametag" />
              <div>
                <div className='font-semibold'>Körpergrösse</div>
                <div>{`Gewicht: ${weight}`}</div>
                <div>{`Grösse: ${size}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

