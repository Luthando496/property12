import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y,Parallax  } from 'swiper/modules';
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaPhone,FaSearch} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeCard from '../components/HomeCard';

// Import Swiper styles



const Home = () => {
  

  

  return (
      <>

    <section className="py-10 w-full bg-gray-200">
    <h2 className="text-center text-2xl font-play tracking-[4px] font-thin lg:text-3xl text-teal-500">Property For <span className="text-sky-500">Sale</span> </h2>
    <div className=" my-14 w-full px-8 md:w-[70%] mx-auto">
      <div className="f dw-full flex relative">
        <input type="text" className="w-full font-thin text-xl px-10 focus:text-gray-400 tracking-widest focus:outline-none focus:border focus:border-teal-500 text-gray-600 rounded-l-xl py-2 relative" />
          {/* <FaSearch className="absolute text-teal-600 text-3xl  top-[5px] right-[15px] transform -translate-x-1" /> */}
          <button className="px-3 md:px-8 py-2 text-white md:tracking-[3px] font-semibold uppercase bg-teal-500">Search</button>
      </div>
    </div>

    </section>

      <Swiper
            style={{
          '--swiper-navigation-color': '#fdff',
          '--swiper-pagination-color': '#f7ff',
        }}
        speed={300}
        // parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation,A11y]}
        className="mySwiper"
      >
      <SwiperSlide className='w-full h-[90vh] first-slide '>
      <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
        <div className="text-center space-y-8 py-14">
          <h4 className="text-base font-bold lg:text-xl text-white lg:font-semibold">All Type Properties<br className='block md:hidden' />  Are <br className='hidden md:block lg:hidden' /> Published Here</h4>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.7] uppercase font-play text-white">Find the best <br className='block md:hidden' /> place <br className='hidden md:block lg:hidden' /> to be</h1>
          <button className="px-3 lg:px-8 py-3 bg-teal-800 font-play text-white lg:tracking-[3px]">Start Exploring</button>
        </div>
      </div>

      </SwiperSlide>
      <SwiperSlide className='w-full h-[100vh] second-slide'>
      <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
        <div className="text-center space-y-8">
          <h4 className="text-base font-bold lg:text-xl text-white lg:font-semibold">Houses, Condos And<br className='block md:hidden' />  Apartments <br className='hidden md:block lg:hidden' /> for rent</h4>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.7] uppercase font-play text-white">Find your fresh <br className='block md:hidden' /> start </h1>
          <button className="px-3 lg:px-8 py-3 bg-teal-800 font-play text-white lg:tracking-[3px]">Start Exploring</button>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className='w-full h-[100vh] third-slide'>
      <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
        <div className="text-center space-y-8">
          <h4 className="text-base font-bold lg:text-xl text-white lg:font-semibold">Lake, Beach And<br className='block md:hidden' />  Apartments <br className='hidden md:block lg:hidden' /> for rent</h4>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.7] uppercase font-play text-white">Find Your Dream<br className='block md:hidden' /> House </h1>
          <button className="px-3 lg:px-8 py-3 bg-teal-800 font-play text-white lg:tracking-[3px]">Start Exploring</button>
        </div>
      </div>
      </SwiperSlide>
   
    </Swiper>

    <section className="py-24 w-full">
      <div className="grid px-8 grid-cols-1 lg:grid-cols-2 gap-6">
      {/*  */}
      <div className="w-full py-10">
        <span className="text-sm text-white bg-teal-500 rounded-lg px-3 py-2">30% OFF</span>
        <h2 className="text-2xl font-play tex-black/80 my-4">Gorgeous Historic House For Sale</h2>
        <p className="text-gray-600/80 text-base font-semibold leading-[1.9]">Just steps away from QM2 express bus to Manhattan and locals buses; only minutes from the LIRR. Walkings distances to Bay Terrace Shopping Centers, Baybridge Common Shopping Center, pool clubs, movie theaters and tennis courts</p>
        <button className="text-white px-4 py-2 mt-8 rounded-lg font-thin bg-teal-500">Order Now</button>
      </div>

      <div className="w-full">
        <img src="/images/pexels-eberhard-grossgasteiger-1612351.jpg" alt="image" className="w-full object-cover rounded-xl shadow-xl" />
      </div>

      </div>
    </section>

    <section className="py-24 w-full bg-gray-300/50 ">
      <div className="px-2 md:px-4 lg:px-10 ">
      <div className="text-center space-y-5">
        <h2 className="text-4xl font-play font-light text-black">Searching For The Best Places?</h2>
        <h3 className="text-2xl  text-gray-500">Handpicked properties by our Agents</h3>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-6 w-full">
        {/*  */}
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />


        
        </div>

      </div>
    </section>

    

    
    <section className="w-full sticky-back py-20">
    <div className="text-center flex justify-center items-center w-full">
      <h1 className="text-2xl tracking-[5px] text-center items-center font-bold text-white flex gap-4"><FaPhone /> +888 222 786</h1>
    </div>
      <div className="w-full flex mt-4 mb-6 justify-center">
      <div className="w-[5rem] h-1 bg-orange-400"></div>
      </div>
        <h2 className="text-black text-center text-2xl font-semibold">Call us 24/7 for any property problem</h2>

        <div className="flex justify-center py-7 w-[90%] md:w-[75%] mx-auto">
          <p className="text-base font-normal text-white text-center">Building below the fold while remembering to think outside the box. Creating customer journeys and finally maximise share of voice.</p>
        </div>

    </section>
    


    <section className="w-full py-20 bg-gray-400/30">
    <h1 className="text-2xl md:text-3xl text-center capitalize font-play py-14">Agents make a difference</h1>
    <div className="w-full px-5 grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:grid-cols-3 gap-x-4 py-8">

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

    </div>

    </section>

    




      </>
  )
}

export default Home