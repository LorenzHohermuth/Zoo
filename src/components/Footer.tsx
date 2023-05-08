import React from 'react'
import { Link } from 'react-router-dom'
import ZooIcon from './ZooIcon'

export default function Footer() {
  return (
    <div className=' bg-gray-700 flex items-center md:h-96 h-64 text-gray-500 font-bold md:text-base sm:text-sm text-xs'>
        <ZooIcon color='#6b7280' className={'md:h-60 sm:h-40 h-32'}/>
          <ul>
            <li>Lorenz</li>
            <li>Hohermuth</li>
            <li></li>
            <li>8400 Winterthur</li>
            <br />
            <li> <a href="mailto:lorenz.hohermuth@lernende.bbw.ch" className='underline'>lorenz.hohermuth@lernende.bbw.ch</a></li>
            <li><a href="tel:+417108168" className='underline'>+41 79 710 81 68</a></li>
            <br />
            <li><Link to='aboutUs#Impressum' className='underline'>Impressum </Link></li>
          </ul>
    </div>
  )
}
