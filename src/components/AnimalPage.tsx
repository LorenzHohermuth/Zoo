import React from 'react'

export default function AnimalPage({imageTop, imageBottom,name,sciName,endangered, popultaion, weight, size,
   text1, text2, titlebottom, textbottom}:{[key: string]:string}) {
  return (
    <div>
        <img src={`Images/${imageTop}`} alt="tierbilder-wwf" className='w-screen object-cover lg:h-144 md:h-80 h-48'/>
        <div className='xl:px-52 md:px-24 sm:px-14 px-5 py-14'>
            <div>
              <h1 className='md:text-5xl text-3xl font-semibold pl-3'>{name}</h1>
              <div className='h-px bg-gray-300 my-2'></div>
            </div>
            <div className='mt-7 mb-12 mx-5 text-center'>
              <p className='md:text-2xl text-lg font-semibold text-gray-800'>
                {text1}
              </p>
            </div>
            <div className='lg:flex md:text-xl flex-row-reverse justify-center'>
              <div className='lg:ml-20 ml-10 lg:my-10 my-16'>
                <div className='flex items-center'>
                  <img className='md:h-14 h-12' src="Icons/name.svg" alt="nametag" />
                  <div>
                    <div className='font-semibold'>Wissenschaftlicher Name</div>
                    <div>{sciName}</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='md:h-14 h-12 p-3' src="Icons/warning.svg" alt="nametag" />
                  <div>
                    <div className='font-semibold'>Gefährdungsstatus (IUCN)</div>
                    <div>{endangered}</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='md:h-14 h-12 p-1' src="Icons/popultaion.svg" alt="nametag" />
                  <div>
                    <div className='font-semibold'>Population</div>
                    <div>{popultaion}</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='md:h-14 h-12 p-1.5' src="\Icons/ruler.svg" alt="nametag" />
                  <div>
                    <div className='font-semibold'>Körpergrösse</div>
                    <div>Gewicht: {weight}</div>
                    <div>Grösse: {size}</div>
                  </div>
                </div>
              </div>
              <div className=' bg-gray-300 w-px'></div>
              <div className='lg:w-1/2 px-7 py-3 text-gray-800'>
                <p className='md:text-lg sm:text-base text-sm font-medium sm:leading-8 leading-6'>
                 {text2}
                </p>
              </div>
            </div>

        </div>

        <div className='my-20 2xl:flex bg-gray-800 w-full py-10 items-center'>
          <img src={`/Images/${imageBottom}`} className='lg:h-128 lg:w-250 object-cover w-full' alt="" />
          <div className='m-16 text-gray-300 md:text-xl font-semibold'>
            <div className=' text-3xl mb-16 2xl:text-center'>{titlebottom}</div>
            <div >
              {textbottom}
            </div>
          </div>
        </div>
    </div>
  )
}
