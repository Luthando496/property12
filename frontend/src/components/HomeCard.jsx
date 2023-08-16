import React from 'react'




const HomeCard = () => {

    

  return (
    <>
        <div className="w-full bg-white rounded-xl shadow-xl">
          <div className="images-slider h-[15rem] rounded-t-xl relative" style={{background:`url(https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,backgroundPosition:'center',backgroundSize:'cover'}}>
          {/* <img src="" alt="" className="w-full h-full object-cover" /> */}
          <span className="absolute top-8 left-0 px-4 bg-teal-400 text-white capitalize py-2">for rent</span>

            
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