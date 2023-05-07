import React from 'react'
import { Link } from 'react-router-dom'
import ZooIcon from './ZooIcon'

export default function Footer() {
  return (
    <div className=' bg-gray-700 flex items-center h-96 text-gray-500 font-bold'>
        <ZooIcon color='#6b7280' className={'h-60'}/>
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
