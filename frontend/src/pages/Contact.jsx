import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <>
        <div className="bg-header">
        <div className="flex justify-center mx-auto w-[70%]">
        <div className="py-14 flex gap-2 pl-8 text-white">
        <Link>
        <span className="font-semibold text-2xl font-play tracking-[3px] uppercase">Home /</span>
        </Link>
        <Link>
        <span className="font-semibold text-2xl font-play tracking-[3px] uppercase">Contact Us</span>
        </Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact