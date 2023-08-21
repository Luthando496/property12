import React,{useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {VscStarFull} from 'react-icons/vsc'
import {RxHeart,RxRulerSquare} from 'react-icons/rx'
import {BsFillHouseFill,BsCheckLg} from 'react-icons/bs'
import {FaBed} from 'react-icons/fa'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import {useDispatch,useSelector} from 'react-redux'
import { getHouseDetails } from '../store/actions/houseActions'
import { Navigation, Pagination, Scrollbar, A11y,Parallax  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const PropertyPage = () => {

  const {home,isLoading} = useSelector(state => state.house)

  const dispatch = useDispatch()
  const {id} = useParams()


  useEffect(()=>{

    dispatch(getHouseDetails(id))

  },[dispatch,id])
  return (
    <>
      <div className="w-full bg-header py-14 flex gap-2 pl-8 text-white">

      <Link>
        <span className="font-semibold text-xl">Home /</span>
      </Link>
      <Link>
        <span className="font-semibold text-xl">Real estate</span>
      </Link>
      </div>

      <section className="w-full py-20 bg-gray-300/10">
        <div className="px-1 grid grid-cols-1 lg:grid-cols-4 items-start gap-4 rounded-lg md:px-8 ">
          {/*  */}
          {home && <div className="w-full col-span-3 bg-white rounded-lg shadow-xl py-10 md:px-4">
            <div className="flex items-center gap-2">
            <div className="flex items-center">
              <VscStarFull className='text-yellow-400' />
              <VscStarFull className='text-yellow-400' />
              <VscStarFull className='text-yellow-400' />
              <VscStarFull className='text-yellow-400' />
              <VscStarFull className='text-yellow-400' />
            </div>
            <span>(1 customer review)</span>
            <span><RxHeart className='text-sky-500 text-xl' /></span>
            
            </div>
            <h2 className="text-2xl font-thin mt-6">{home.name}</h2>
            <div className="flex items-center justify-center gap-4 mt-7">
              <div className="flex items-center gap-3">
                <BsFillHouseFill className='text-sky-500' />  <span className="font-thin capitalize">Villa</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBed className='text-sky-500 text-xl' /> <span className="font-thin capitalize">{home.bedrooms} rooms</span>
              </div>
              <div className="flex items-center gap-3">
                <RxRulerSquare className='text-sky-500 text-base' /> <span className="font-thin capitalize">370 sqft</span>
              </div>
            </div>
            <div className="w-full h-[40rem] my-10 px-4">
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
        {home.images.map((image,index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      
      
      
    </Swiper>

            </div>
            <div className="w-full">
            <Tabs position="relative" variant="unstyled">
              <TabList>
                <Tab>Description</Tab>
                <Tab>location</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <p className="text-base font-semibold leading-[1.9] font-gray-600">
                  {home.description}
                  </p>

                  <h3 className="text-sky-500/80 tracking-[2px] text-2xl mt-8 font-bold">Amenities</h3>

                  <h4 className="text-xl text-black mt-7">Exterior</h4>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex px-5 gap-2 items-center border bg-sky-300/50 py-4">
                      <BsCheckLg  className='text-green-400 text-2xl font-extrabold' /> <span className="text-gray-500 font-semibold">Garden</span>
                    </div>
                    <div className="flex px-5 gap-2 items-center border bg-sky-300/50 py-4">
                      <BsCheckLg  className='text-green-400 text-2xl font-extrabold' /> <span className="text-gray-500 font-semibold">Garden</span>
                    </div>
                  </div>

                  <h4 className="text-xl text-black mt-7">Interior</h4>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex px-5 gap-2 items-center border bg-sky-300/50 py-4">
                      <BsCheckLg  className='text-green-400 text-2xl font-extrabold' /> <span className="text-gray-500 font-semibold">Fireplace</span>
                    </div>
                    <div className="flex px-5 gap-2 items-center border bg-sky-300/50 py-4">
                      <BsCheckLg  className='text-green-400 text-2xl font-extrabold' /> <span className="text-gray-500 font-semibold">Heating</span>
                    </div>
                  </div>


                  <h4 className="text-xl text-black mt-7">Specific</h4>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex px-5 gap-2 items-center border bg-sky-300/50 py-4">
                      <BsCheckLg  className='text-green-400 text-2xl font-extrabold' /> <span className="text-gray-500 font-semibold">Balcony</span>
                    </div>
                    <div className="flex px-5 gap-2 items-center border bg-sky-300/50 py-4">
                      <BsCheckLg  className='text-green-400 text-2xl font-extrabold' /> <span className="text-gray-500 font-semibold">GYM</span>
                    </div>
                  </div>

                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
            </div>
          </div>}
          {/*  */}
          <div className="w-full col-span-1">
          <div className="w-full border">
          <div className="w-full py-5 border-b text-center">
            <h3 className="text-xl text-black/80 font-semibold">Contact agent</h3>
          </div>
          <div className="text-center">
            <h3 className="text-base py-3 font-light">Daisy Johnson</h3>
            <h3 className="text-base py-3 font-light">mysha@mail.com</h3>
          </div>
          </div>

          <div className="w-full mt-8 border border-gray-300">
          <div className="w-full py-5 border-b text-center">
            <h3 className="text-xl text-black/80 font-semibold">Book now</h3>
          </div>
          <div className="w-full px-4 my-2">
            <input type="text" placeholder='name*' name="name" className='w-full bg-gray-200 py-2 px-3 rounded-xl ' />
          </div>
          <div className="w-full px-4 my-2">
            <input type="text" placeholder='Email*' name="name" className='w-full bg-gray-200 py-2 px-3 rounded-xl ' />
          </div>
          <div className="w-full px-4 my-2">
            <input type="text" placeholder='Phone*' name="name" className='w-full bg-gray-200 py-2 px-3 rounded-xl ' />
          </div>
          <div className="w-full px-4 my-2">
            <textarea type="text" placeholder='Description*' name="name" className='w-full bg-gray-200 py-2 px-3 rounded-xl '></textarea>
          </div>
          <div className="w-full px-4 my-2">
            <button className='w-full bg-sky-500 py-2 px-3 rounded-xl text-white'>Book now</button>
            </div>
          </div>
          
            
          </div>

        </div>

      </section>
    </>
  )
}

export default PropertyPage