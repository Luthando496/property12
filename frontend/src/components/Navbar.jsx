import React,{useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import {LiaTimesSolid } from 'react-icons/lia'
import {RxHamburgerMenu } from 'react-icons/rx'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'




const Navbar = () => {

    const [isNav,setNav]= useState(false)
  return (
    <>

        <nav className='w-full bg-white py-4 sticky top-0 z-50'>
        <div className="flex justify-between items-center px-1 md:px-3">
                    <Link to='/'>
                        <img src="/images/Estate.png" alt="logo" className="w-[10rem] transition-all sm:w-[15rem] h-[3rem] object-cover" />
                    </Link>
                    <ul className="hidden md:flex gap-8 items-center">
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
                    <Link to='/login' className="text-xl font-semibold uppercase">LOGIN</Link>
                    </div>

                    <RxHamburgerMenu onClick={()=> setNav(!isNav)} className='md:hidden text-3xl' />
        </div>
        </nav>


        <div className={`fixed duration-500 ${isNav ? 'translate-x-[0%]' :'-translate-x-[170%]'} bg-white  h-full w-[40%] md:w-[60%] z-50 top-0 left-0 shadow-xl rounded-md`}>
        <div className="w-full flex justify-between pr-8">
        <Link to='/'>
            <img src="/images/Estate.png" alt="logo" className="w-[8rem] transition-all sm:w-[15rem] h-[5rem] object-cover" />
        </Link>

        <button onClick={()=> setNav(!isNav)} className="absolute top-6 -right-12">
            <LiaTimesSolid className='text-3xl bg-black rounded-full p-1 md:text-5xl text-teal-400' />
        </button>
        </div>

        <ul className="mt-14 flex px-4 flex-col gap-y-8 w-full">
            <li className="w-full">
                <NavLink onClick={()=> setNav(!isNav)} className='uppercase tracking-[2px] text-teal-400 text-2xl font-thin ' to='/'>
                    Home
                </NavLink>
            </li>
            <li className="w-full">
                <NavLink onClick={()=> setNav(!isNav)} className='uppercase tracking-[2px] text-teal-400 text-2xl font-thin ' to='/about-us'>
                    About Us
                </NavLink>
            </li>
            <li className="w-full">
                <NavLink onClick={()=> setNav(!isNav)} className='uppercase tracking-[2px] text-teal-400 text-2xl font-thin ' to='/contact'>
                    Contact
                </NavLink>
            </li>

        </ul>

        </div>

    </>
   
  )
}

export default Navbar;