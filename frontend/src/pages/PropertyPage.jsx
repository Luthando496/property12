import React from 'react'
import {Link} from 'react-router-dom'


const PropertyPage = () => {
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

      <section className="w-full pt-20 bg-gray-300/10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-8">
          {/*  */}
          <div className="w-full col-span-3 bg-white rounded-lg shadow-xl py-10">

          </div>
          {/*  */}
          <div className="w-full col-span-1 py-10 bg-gray-100">
            
          </div>

        </div>

      </section>
    </>
  )
}

export default PropertyPage