import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y,Parallax  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles



const Home = () => {

  

  return (
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
      <SwiperSlide className='w-full h-[100vh] first-slide '>
      <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
        <div className="text-center space-y-8">
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
   
      </Swiper>
  )
}

export default Home