import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function HamburgerNav() {

    const defaultClass = 'pl-3 pr-4 rounded-full text-emerald-50 ml-11 mr-12 my-6 flex flex-row items-center';
    const NavActivClass = 'bg-emerald-700' + " " + defaultClass;
  
    const [elm1, setElm1] = useState('top-8');
    const [elm2, setElm2] = useState('top-10');
    const [elm3, setElm3] = useState('top-12');
    const [isOpen, setIsOpen] = useState(false);

    function open(){
        setIsOpen(true)
        setElm1('top-10 rotate-45')
        setElm2('top-10 -rotate-45')
        setElm3('top-10 -rotate-45')
    }

    function close(){
        setIsOpen(false)
        setElm1('top-8')
        setElm2('top-10')
        setElm3('top-12')
    }

    return (
    <div className='sm:hidden'>
        <button onClick={() => {isOpen ? close() : open()}}>
            <div className={'duration-200 absolute right-6 bg-emerald-50 w-8 h-1.5 ' + elm1}></div>
            <div className={'duration-200 absolute right-6 bg-emerald-50 w-8 h-1.5 ' + elm2}></div>
            <div className={'duration-200 absolute right-6 bg-emerald-50 w-8 h-1.5 ' + elm3}></div>
        </button>
        <div className={isOpen ? '' : 'hidden'}>
            <div className=' bg-emerald-500 absolute top-20 right-0 rounded-b-xl'>
            <NavLink to='/' className={({isActive}) => isActive? NavActivClass : defaultClass}>
                <img src="Icons\Home.svg" className='mr-1 h-10' alt="Home Icon" />
                Home
            </NavLink>
            <NavLink to='/animals' className={({isActive}) => isActive? NavActivClass : defaultClass}>
                <img src="Icons\bear.svg" className='mr-1 h-10' alt="Animal Icon" />
                Tiere
            </NavLink>
            <NavLink to='/aboutUs' className={({isActive}) => isActive? NavActivClass : defaultClass}>
                <img src="Icons\AboutUs.svg" className='mr-1 h-10' alt="AboutUs Icon" />
                About Us
            </NavLink>
            </div>
        </div>
    </div>
  )
}
