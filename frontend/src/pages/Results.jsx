import React from 'react'
import HomeCard from '../components/HomeCard';


const Results =()=>{

    return(
        <>
        <section className="py-10 w-full bg-gray-200">
    <h2 className="text-center text-2xl font-play tracking-[4px] font-thin lg:text-3xl text-teal-500">Property For <span className="text-sky-500">Sale</span> </h2>
    <div className="my-14 w-full px-8 md:w-[70%] mx-auto">
      <div className="f dw-full flex relative">
        <input type="text" className="w-full font-thin text-xl px-10 focus:text-gray-400 tracking-widest focus:outline-none focus:border focus:border-teal-500 text-gray-600 rounded-l-xl py-2 relative" />
          {/* <FaSearch className="absolute text-teal-600 text-3xl  top-[5px] right-[15px] transform -translate-x-1" /> */}
          <button className="px-3 md:px-8 py-2 text-white md:tracking-[3px] font-semibold uppercase bg-teal-500">Search</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {/*  */}
        <div className="w-full">
        <span className="text-base font-light text-gray-400">Property type</span>

          <select name="" id="" className='w-full my-3 py-4 bg-teal-400/70 rounded-lg font-poppins text-center'>
            <option value="">Apartments</option>
            <option value="">Townhouse</option>
            <option value="">House</option>
          </select>
        </div>
        {/*  */}
        <div className="w-full">
        <span className="text-base font-light text-gray-400">Min Price</span>

          <select name="" id="" className='w-full my-3 py-4 bg-teal-400/70 rounded-lg font-poppins text-center'>
            <option value="">Any</option>
            <option value="">Apartments</option>
            <option value="">Condo</option>
            <option value="">House</option>
            <option value="">Office</option>
          </select>
        </div>
        {/*  */}
        <div className="w-full">
        <span className="text-base font-light text-gray-400">Max Price</span>
          <select name="" id="" className='w-full my-3 py-4 bg-teal-400/70 rounded-lg font-poppins text-center'>
            <option value="">Any</option>
            <option value="">Apartments</option>
            <option value="">Condo</option>
            <option value="">House</option>
            <option value="">Office</option>
          </select>
        </div>
        {/*  */}
        <div className="w-full">
        <span className="text-base font-light text-gray-400">Bedrooms</span>

          <select name="" id="" className='w-full my-3 py-4 bg-teal-400/70 rounded-lg font-poppins text-center'>
            <option value="">Any</option>
            <option value="">Apartments</option>
            <option value="">Condo</option>
            <option value="">House</option>
            <option value="">Office</option>
          </select>
        </div>
      </div>
    </div>

        </section>

        <h2 className="my-10 pl-5 md:pl-20 text-gray-500 text-3xl font-play ">Property for Sale in Stellenbosch</h2>
        
        <div className="mb-10 pl-5 md:pl-20 space-y-4">
            <h3 className="text-xl text-gray-400 font-semibold ">Order by:</h3>
            <select className='py-5 px-8 block rounded-lg bg-teal-400' name="Sort" id="">
                <option value="">high to low</option>
                <option value="">low to high</option>
                <option value="">ascending</option>
                <option value="">high to low</option>
            </select>
        </div>

        <section className="px-4 md:px-10 lg:px-14 w-full pb-20">
        <div className="w-full grid grid-cols-1 gap-y-10 md:gap-y-14 lg:gap-y-20 md:grid-cols-2 items-start  lg:grid-cols-3 gap-7">
            
            <HomeCard  />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
        </div>

        </section>


        </>
    )
}


export default Results;