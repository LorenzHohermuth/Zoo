import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div>
        <div className=' absolute w-full md:h-250 h-144 flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <div className='mb-8 text-emerald-50 text-7xl font-semibold'>MyZoo</div>
            <div>
              <Link to='aboutUs ' onClick={() => window.scrollTo(0, 0)}
              className=' m-2 text-gray-700 text-xl font-semibold bg-gray-50 py-2 px-6 rounded-full hover:bg-gray-200'>
                Our Vision
              </Link>
              <Link to='animals' onClick={() => window.scrollTo(0, 0)}
              className=' m-2 text-gray-700 text-xl font-semibold bg-gray-50 py-2 px-6 rounded-full hover:bg-gray-200'>
                GoTo Animals
              </Link>
            </div>
          </div>
        </div>
        <img src="Images/indischer-tiger.jpg" alt="tieger-wwf" className='w-screen object-cover md:h-250 h-144'/>
      </div>

      
    </div>
  )
}
 