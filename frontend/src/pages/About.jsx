import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillPeopleFill} from 'react-icons/bs'
import {BiSolidContact} from 'react-icons/bi'
import {FcServices} from 'react-icons/fc'
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaPhone} from 'react-icons/fa'



const About = () => {
  return (
    <>
    <div className="bg-header">
        <div className="flex justify-center mx-auto w-[70%]">
        <div className="py-14 flex gap-2 pl-8 text-white">
        <Link>
        <span className="font-semibold text-2xl font-play tracking-[3px] uppercase">Home /</span>
        </Link>
        <Link>
        <span className="font-semibold text-2xl font-play tracking-[3px] uppercase">About Us</span>
        </Link>
        </div>
        </div>
    </div>


    <section className="py-24 w-full">
        <div className="w-full px-2 md:px-4 lg:px-8 grid gap-y-7 lg:gap-y-0 grid-cols-1 lg:grid-cols-2 gap-x-4">

        <div className="w-full pt-8 col-span-1 mt-4">

        <h1 className="text-2xl md:text-3xl font-play">Our Successful History</h1>
        <p className="py-10 text-gray-500 font-semibold">There are many variations of passages of Loremin Ipsum available, but the majority have suffered alteration in by injected.</p>

        <p className="text-gray-500 font-semibold pb-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature froming 45 BC, making it over 2000 years oldest. Richard McClintock, avons Latin professor at Hampden-Sydney College in Virginia.</p>

        <div className="grid grid-cols-3 gap-5 px-4">

        <div className="w flex items-center gap-2">
            <BsFillPeopleFill  className='text-teal-500 text-base md:text-xl lg:text-4xl'  />
            <span className="text-black text-sm md:text-base  font-semibold capitalize">News Blog</span>
        </div>
        <div className="w flex items-center gap-2">
            <FcServices  className='text-teal-500 text-base md:text-xl lg:text-4xl'  />
            <span className="text-black text-sm md:text-base font-semibold capitalize">Our Service</span>
        </div>
        <div className="w flex items-center gap-2">
            <BiSolidContact  className='text-teal-500 text-base md:text-xl lg:text-4xl'  />
            <span className="text-black text-sm md:text-base font-semibold capitalize">Contact Us</span>
        </div>

        </div>


        </div>
        <div className="w-full col-span-1 my-auto ">
            <img src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full rounded-2xl shadow-xl hover:-translate-y-5 duration-500 object-cover" />
        </div>
        </div>

    </section>

    <section className="py-24 bg-gray-200 w-full">
        <h1 className="text-center font-play text-4xl">Meet Crew Members</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 px-4 lg:px-8 gap-5 mt-8">
        <div className="w-full bg-white rounded-t-lg">
    <div className="img w-full rounded-t-lg h-[18rem]">
      <img src="/images/pexels-valeriia-1miller-2587054.jpg" alt="image" className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="w-full text-center">
      <h2 className="text-xl font-play mt-5">Trevor Walsh</h2>
      <h1 className="text-base font-play text-teal-500">Commercial Broker</h1>
      <div className="flex justify-center items-center">
        <div className="flex gap-4 my-3">
          <FaFacebook className='text-gray-600 text-base' />
          <FaInstagram className='text-gray-600 text-base' />
          <FaTwitter className='text-gray-600 text-base' />
          <FaYoutube className='text-gray-600 text-base' />
        </div>
      </div>
      <div className="text-center w-full">
        <p className="text-xl px-4 pb-7 font-normal text-gray-600">There are many variations of passages ofen Ipsum available majority to suffered.</p>
      </div>
    </div>

    </div>
    {/*  */}
    <div className="w-full bg-white rounded-t-lg">
    <div className="img w-full rounded-t-lg h-[18rem]">
      <img src="/images/pexels-valeriia-1miller-2587054.jpg" alt="image" className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="w-full text-center">
      <h2 className="text-xl font-play mt-5">Trevor Walsh</h2>
      <h1 className="text-base font-play text-teal-500">Commercial Broker</h1>
      <div className="flex justify-center items-center">
        <div className="flex gap-4 my-3">
          <FaFacebook className='text-gray-600 text-base' />
          <FaInstagram className='text-gray-600 text-base' />
          <FaTwitter className='text-gray-600 text-base' />
          <FaYoutube className='text-gray-600 text-base' />
        </div>
      </div>
      <div className="text-center w-full">
        <p className="text-xl px-4 pb-7 font-normal text-gray-600">There are many variations of passages ofen Ipsum available majority to suffered.</p>
      </div>
    </div>

    </div>
    {/*  */}
    <div className="w-full bg-white rounded-t-lg">
    <div className="img w-full rounded-t-lg h-[18rem]">
      <img src="/images/pexels-valeriia-1miller-2587054.jpg" alt="image" className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="w-full text-center">
      <h2 className="text-xl font-play mt-5">Trevor Walsh</h2>
      <h1 className="text-base font-play text-teal-500">Commercial Broker</h1>
      <div className="flex justify-center items-center">
        <div className="flex gap-4 my-3">
          <FaFacebook className='text-gray-600 text-base' />
          <FaInstagram className='text-gray-600 text-base' />
          <FaTwitter className='text-gray-600 text-base' />
          <FaYoutube className='text-gray-600 text-base' />
        </div>
      </div>
      <div className="text-center w-full">
        <p className="text-xl px-4 pb-7 font-normal text-gray-600">There are many variations of passages ofen Ipsum available majority to suffered.</p>
      </div>
    </div>

    </div>
        </div>
    </section>


    <section className="py-24 w-full">
        <div className="w-full px-2 md:px-4 lg:px-8 grid gap-y-7 lg:gap-y-0 grid-cols-1 lg:grid-cols-2 gap-x-4">

        <div className="w-full pt-8 col-span-1 mt-4">

        <h1 className="text-2xl md:text-3xl font-play">Our Offices Location</h1>
        <p className="py-10 text-gray-500 font-semibold">There are many variations of passages of Loremin Ipsum available, but the majority have suffered alteration in by injected.</p>

        <p className="text-gray-500 font-semibold pb-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature froming 45 BC, making it over 2000 years oldest.</p>
        <p className="pb-10 text-gray-500 font-semibold">Sell & Rent Inquiries <span className="text-teal-500 font-semibold">luthandodidiza197@gmail.com</span> </p>


        </div>
        <div className="w-full col-span-1 my-auto ">
            <img src="https://v9m6d2m2.rocketcdn.me/elementor/demos/real-estate/wp-content/uploads/sites/65/2021/06/Box.jpg" alt="image" className="w-full rounded-2xl shadow-xl hover:-translate-y-5 duration-500 object-cover" />
        </div>
        </div>

    </section>
    </>
  )
}

export default About