import React from 'react'
import { Button, DatePicker } from 'antd';
import { MdOutlineArrowForwardIos} from 'react-icons/md'
import { FaFacebook, FaTwitch, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full bg-slate-700 py-20 px-10'>
        <div className="w-full px-3 flex flex-col-reverse lg:px-10 space-y-10 lg:space-y-0 md:grid lg:grid-cols-4 md:grid-cols-2 items-start gap-4">
            {/*  */}
            <div className="w-full col-span-1">
                <h1 className="text-2xl font-play font-thin text-white">Popular Search</h1>

                <ul className="flex flex-col gap-3 mt-10">
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Apartment For Rent</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Apartment Low to Hide</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Offices To Buy</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Offices to rent</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Town home For Rent</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Town home For Rent</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Shop For Rent</span>
                    </li>
                </ul>
            </div>
            {/*  */}
            <div className="w-full col-span-1">
                <h1 className="text-2xl font-play font-thin text-white">Homepress Market</h1>

                <ul className="flex flex-col gap-3 mt-10">
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Cape Town Office</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Durban villa Office</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Pretoria Office</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Johannesburg Office</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Blue Downs Office</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Stellenbosch Office</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">East London Office</span>
                    </li>
                </ul>
            </div>
            {/*  */}
            <div className="w-full col-span-1">
                <h1 className="text-2xl font-play font-thin text-white">Quick Links</h1>

                <ul className="flex flex-col gap-3 mt-10">
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Pricing plans</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">services</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">About Us</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Terms & condition</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Privacy policy</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">Contact Us</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineArrowForwardIos className='text-sky-500' />  <span className="text-gray-400 font-semibold uppercase">get rewarded</span>
                    </li>
                </ul>
            </div>
            {/*  */}
            <div className="w-full col-span-1 space-y-5">
                <h1 className="text-2xl font-play font-thin text-white">Sign Up For Newsletter</h1>

                <p className="text-white">Enter your email bellow to receive a $30 coupon, special offters, excusive discounts and more!</p>
                <input type="text" placeholder='Your Email Address' name="" id="" className="w-full py-2 px-6 text-black focus:outline-none tracking-[2px] font-thin placeholder:font-play" />

                <h2 className="text-xl flex font-thin  gap-5 font-play text-white">Follow Us <span className="flex gap-2 items-center"><FaFacebook className='text-sky-500 text-2xl' /><FaYoutube className='text-sky-500 text-2xl' /><FaTwitch className='text-sky-500 text-2xl' /> </span></h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer