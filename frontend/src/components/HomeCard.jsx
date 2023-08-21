import React from 'react'
import {Link} from 'react-router-dom'



const HomeCard = ({location,price,name,bed,bath,img}) => {

    

  return (
    <>
        <div className="w-full bg-white border hover:shadow-2xl hover:-translate-y-1 duration-300 group rounded-xl ">
          <div className="images-slider h-[15rem] rounded-t-xl relative" style={{background:`url(${img})`,backgroundPosition:'center',backgroundSize:'cover'}}>
          {/* <img src="" alt="" className="w-full h-full object-cover" /> */}
          <span className="absolute group-hover:bg-purple-400 duration-300 top-8 left-0 px-4 bg-teal-400 text-white capitalize py-2">for rent</span>

            
          </div>
          <div className="w-full pt-5">
          <div className="text-center">
          <Link to='/single-house' className="text-[17px] text-center font-play uppercase">{name}</Link>
          </div>
          <p className="text-base font-semibold py-4 text-teal-500 text-center">R {price}</p>
          
          <div className="space-y-4 px-4">
          <div className="flex border-b pb-2 border-gray-500 justify-between px-4">
            <span className="text-gray-600 font-semibold  uppercase">Bedroom :</span>
            <span className="text-gray-600 font-semibold  capitalize">{bed} rooms</span>
          </div>
          <div className="flex border-b pb-2 border-gray-500 justify-between px-4">
            <span className="text-gray-600 font-semibold  uppercase">Bathrooms:</span>
            <span className="text-gray-600 font-semibold capitalize">{bath} rooms</span>
          </div>
          <div className="flex pb-5 justify-between  px-4">
            <span className="text-gray-600 font-semibold  uppercase">Location :</span>
            <span className="text-gray-600 font-semibold  capitalize">{location}</span>
          </div>
          </div>

          </div>

        </div>
    </>
  )
}

export default HomeCard