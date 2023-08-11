import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Parallax  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';




const HomeCard = () => {

    const images =[
    {url:'/images/pexels-julia-kuzenkov-1974596.jpg'},
    {url:'https://images.pexels.com/photos/2194399/pexels-photo-2194399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {url:'/images/pexels-eberhard-grossgasteiger-1612351.jpg'},
    {url:'https://images.pexels.com/photos/633561/pexels-photo-633561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {url:'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
  ]

  return (
    <>
        <div className="w-full bg-white rounded-xl shadow-xl">
          <div className="images-slider h-[15rem] rounded-t-xl">
            <Swiper className='h-full rounded-t-xl' speed={300}  pagination={{clickable: true, }}
            navigation={true}
            modules={[Pagination, Navigation,A11y]}
            >
          {images.map((image,i)=>(
            <SwiperSlide key={i} className='w-full h-[full] first-slide rounded-t-xl' style={{background:`url(${image.url})`,backgroundPosition:'center',backgroundSize:'cover'}} >
              {/* <img src={image.url} alt="logo" className="w-full h-full rounded-t-xl" /> */}
            </SwiperSlide>

          ))}

            </Swiper>

            
          </div>
          <div className="w-full pt-5">
          <h4 className="text-[17px] text-center font-play uppercase">historical grand family villa rio</h4>
          <p className="text-base font-semibold py-4 text-teal-500 text-center">R 7 000 000.00</p>
          
          <div className="space-y-4 px-4">
          <div className="flex border-b pb-2 border-gray-500 justify-between px-4">
            <span className="text-gray-600 font-semibold  uppercase">Bedroom :</span>
            <span className="text-gray-600 font-semibold  capitalize">8 rooms</span>
          </div>
          <div className="flex border-b pb-2 border-gray-500 justify-between px-4">
            <span className="text-gray-600 font-semibold  uppercase">SQUARE FEET :</span>
            <span className="text-gray-600 font-semibold capitalize">3226</span>
          </div>
          <div className="flex pb-5 justify-between  px-4">
            <span className="text-gray-600 font-semibold  uppercase">Location :</span>
            <span className="text-gray-600 font-semibold  capitalize">Cape Town</span>
          </div>
          </div>

          </div>

        </div>
    </>
  )
}

export default HomeCard