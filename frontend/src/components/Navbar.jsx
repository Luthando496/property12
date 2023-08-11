import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <nav className='w-full bg-white py-4 sticky top-0 z-50'>
        <div className="flex justify-between items-center px-3">
            <Link to='/'>
                <img src="/images/Estate.png" alt="logo" className="w-[15rem] h-[3rem] object-cover" />
            </Link>
            <ul className="flex gap-8 items-center">
                <NavLink className='uppercase text-black/80' to='/'>
                    Home
                </NavLink>
                <NavLink className='uppercase text-black/80' to='/about-us'>
                    About Us
                </NavLink>
                <NavLink className='uppercase text-black/80' to='/contact'>
                    Contact Us
                </NavLink>
            </ul>
            
            <div className="">
            <Link to='/login' className="text-xl font-light uppercase">LOGIN</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar