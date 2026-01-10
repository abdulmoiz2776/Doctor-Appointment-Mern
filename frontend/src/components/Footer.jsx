import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>As a medical professional, staying informed and connected with the latest advancements in the field is crucial. Doctors(Physicians) often rely on various websites to access medical resources, research articles, clinical guidelines, and educational content.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>03066465599</li>
                <li>nasir@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='text-sm text-center py-5'>Copyright 2024 @ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
