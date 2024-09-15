import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At our Hospital, we are dedicated to providing exceptional healthcare services, ensuring the well-being and comfort of every patient. With a focus on compassion, innovation, and expertise, we strive to meet the unique needs of our community.</p>
          <p>Our team of highly skilled doctors, nurses, and healthcare professionals is committed to delivering personalized care with the latest medical technologies. We believe in a patient-first approach, where your health, safety, and comfort are our top priorities.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to create a healthcare environment where every individual receives quality care that is accessible, affordable, and delivered with empathy. We aim to lead the way in medical innovation and patient-centered care, empowering our patients to live healthier, fuller lives.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row  mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>We pride ourselves on delivering timely and effective care, ensuring that every patient receives the right treatment without unnecessary delays.</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Our hospital offers comprehensive healthcare services all under one roof, with modern facilities designed to make your visit smooth and hassle-free.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>We understand that every patient is unique. Our healthcare solutions are tailored to meet your specific medical needs with a personal touch.</p>
        </div>
      </div>
    </div>
  )
}

export default About
