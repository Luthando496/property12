import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <section className='w-full'>
      <div className="w-full bg-header py-14 flex gap-2 pl-8 text-white">

      <Link>
        <span className="font-semibold text-xl">Home /</span>
      </Link>
      <Link>
        <span className="font-semibold text-xl">Real estate</span>
      </Link>

      </div>
    </section>
  )
}

export default Home