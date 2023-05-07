import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AnimalRight({image,name,sciName,endangered, popultaion, weight, size, link}:{[key: string]:string}) {

  const [overClass, setHoverClass] = useState('-right-full')

  return (
    <div className=' my-20 flex items-center'>

      <div className=''>
        <div className='w-fit'>
          <div className='ml-64'>
            <h1 className='text-3xl font font-semibold ml-3'>
              {name}
              <div className='h-px mb-2.5 mt-3 bg-gray-300'></div>
            </h1>
            <div>
              <div className='flex items-center'>
                <img className='h-16' src="Icons/name.svg" alt="nametag" />
                <div className='text-xl'>
                  <div className='font-semibold'>Wissenschaftlicher Name</div>
                  <div>{sciName}</div>
                </div>
              </div>
              <div className='flex my-5 items-center'>
                <img className='h-16 p-3' src="Icons/warning.svg" alt="nametag" />
                <div className='text-xl'>
                  <div className='font-semibold'>Gefährdungsstatus (IUCN)</div>
                  <div>{endangered}</div>
                </div>
              </div>
              <div className='flex my-5 items-center'>
                <img className='h-16 p-1' src="Icons/popultaion.svg" alt="nametag" />
                <div className='text-xl'>
                  <div className='font-semibold'>Population</div>
                  <div>{popultaion}</div>
                </div>
              </div>
              <div className='flex my-5 items-center'>
                <img className='h-16 p-1.5' src="Icons/ruler.svg" alt="nametag" />
                <div className='text-xl'>
                  <div className='font-semibold'>Körpergrösse</div>
                  <div>{`Gewicht: ${weight}`}</div>
                  <div>{`Grösse: ${size}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full justify-end flex'>

        <div className={`duration-200 absolute w-250 h-128  bg-opacity-50 bg-neutral-800 ${overClass}`}
        onMouseOut={() => setHoverClass('-right-full')} onMouseOver={(e) => setHoverClass('right-0')}>
          <Link onClick={() => window.scrollTo(0, 0)} className='w-full h-full flex justify-center items-center' to={link}>
            <div className='text-5xl font-semibold text-emerald-50'>{name}</div>
          </Link>
        </div>

        <img src={`Images/${image}`} className='object-cover h-128 w-250 right-0' alt="animal image"
        onMouseOver={() => setHoverClass('right-0')} />
        </div>

      </div>
  )
}
