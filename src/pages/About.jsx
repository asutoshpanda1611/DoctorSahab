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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempore quibusdam atque, esse obcaecati debitis ipsam beatae assumenda quasi, neque asperiores consequatur inventore, sed qui perferendis! Animi perferendis, beatae quo voluptatum molestias veniam autem dolorem quos iure alias laudantium ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora repellat, ex sint nesciunt dolores labore tenetur quae ratione facilis voluptatum aliquam architecto odio nihil cupiditate ea minima accusantium suscipit ullam? Aut incidunt ut illo eaque alias iusto aspernatur voluptates adipisci!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quos ad doloribus corporis obcaecati officia labore atque a minima. Iure excepturi nostrum dignissimos doloribus repellendus esse optio, fugit perspiciatis quasi dolor fuga ex sapiente vero! Aut repellat facere blanditiis ducimus unde nostrum incidunt aspernatur eaque cum?</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row  mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, consequatur!</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, consequatur!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, consequatur!</p>
        </div>
      </div>
    </div>
  )
}

export default About