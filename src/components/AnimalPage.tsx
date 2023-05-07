import React from 'react'

export default function AnimalPage({imageTop, imageBottom,name,sciName,endangered, popultaion, weight, size,
   text1, text2, titlebottom, textbottom}:{[key: string]:string}) {
  return (
    <div>
        <img src={`/Images/${imageTop}`} alt="tierbilder-wwf" className='w-screen object-cover h-144'/>
        <div className='px-52 py-14'>
            <div>
              <h1 className='text-5xl font-semibold pl-3'>{name}</h1>
              <div className='h-px bg-gray-300 my-2'></div>
            </div>
            <div className='my-7 mx-5 text-center'>
              <p className='text-3xl font-semibold text-gray-800'>
                {text1}
              </p>
            </div>
            <div className='flex'>
              <div className='w-1/2 px-7 py-3 text-gray-800'>
                <p className='text-lg font-medium leading-7'>
                 {text2}
                </p>
              </div>
              <div className=' bg-gray-300 w-px'></div>
              <div className='px-5'>
                <div className='flex items-center'>
                  <img className='h-16' src="\Icons/name.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Wissenschaftlicher Name</div>
                    <div>{sciName}</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='h-16 p-3' src="\Icons/warning.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Gefährdungsstatus (IUCN)</div>
                    <div>{endangered}</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='h-16 p-1' src="\Icons/popultaion.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Population</div>
                    <div>{popultaion}</div>
                  </div>
                </div>
                <div className='flex my-5 items-center'>
                  <img className='h-16 p-1.5' src="\Icons/ruler.svg" alt="nametag" />
                  <div className='text-xl'>
                    <div className='font-semibold'>Körpergrösse</div>
                    <div>Gewicht: {weight}</div>
                    <div>Grösse: {size}</div>
                  </div>
                </div>
              </div>
            </div>

        </div>

        <div className='my-20 flex bg-gray-800 w-full py-10 items-center'>
          <img src={`/Images/${imageBottom}`} className='h-128' alt="" />
          <div className='ml-16 text-gray-300 text-2xl font-semibold'>
            <div className=' text-3xl mb-16 w-full flex justify-center'>{titlebottom}</div>
            <div className='px-12'>
              {textbottom}
            </div>
          </div>
        </div>
    </div>
  )
}
