import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import ZooIcon from './ZooIcon';

export default function Nav() {

  const defaultClass = ' text-emerald-50 mx-3 flex flex-row items-center';
  const NavActivClass = '' + defaultClass;

  return (
    <div className='flex items-center bg-emerald-600 h-20 justify-between'>
        <Link to="/">
          <ZooIcon color='#f9fafb' className={'h-24'}/>
        </Link>
        <div className='mr-20 text-lg flex flex-row'>
          <NavLink to='/' className={({isActive}) => isActive? NavActivClass : defaultClass}>
            <img src="\Icons\Home.svg" className='mr-1 h-10' alt="Home Icon" />
            Home
          </NavLink>
          <NavLink to='animals' className={({isActive}) => isActive? NavActivClass : defaultClass}>
          <img src="\Icons\bear.svg" className='mr-1 h-10' alt="Home Icon" />
            Tiere
          </NavLink>
          <NavLink to='aboutUs' className={({isActive}) => isActive? NavActivClass : defaultClass}>
          <img src="\Icons\AboutUs.svg" className='mr-1 h-10' alt="Home Icon" />
            About Us
          </NavLink>
        </div>
    </div>
  )
}