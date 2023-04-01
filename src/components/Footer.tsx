import React from 'react'
import { Link } from 'react-router-dom'
import ZooIcon from './ZooIcon'

export default function Footer() {
  return (
    <div className=' bg-gray-700 flex items-center h-96 text-gray-500 font-bold'>
        <ZooIcon color='#6b7280' className={'h-60'}/>
        <div>
          Lorenz <br />
          Hohermuth <br />
          Zoostrasse 23 <br />
          Winterthur <br />
          <br />
          <a href="mailto:lorenz.hohermuth@lernende.bbw.ch" className='underline'>lorenz.hohermuth@lernende.bbw.ch</a> <br />
          <a href="tel:+417108168" className='underline'>+41 710 81 68</a> <br />
        </div>
        <div className='ml-20'>
          <Link to='aboutUs#Impressum' className='underline'>Impressum </Link>
          |
          <Link to='datenschutz' className='underline'> Datenschutzerklärung</Link>
        </div>
    </div>
  )
}
