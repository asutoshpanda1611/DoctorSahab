import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>DoctorSahab is a very renowed company designed so that people can book appointment</p>
            </div>


            <div>
                <p className='text-xl font-medium mb-5'>COMAPNY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>


            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 93XXXXXXXX</li>
                    <li>asutoshxxxx@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <b><p className='py-5 text-sm text-center'>Copyright 2024 Asutosh Panda - All Rights Reserved</p></b>
        </div>

    </div>
  )
}

export default Footer