import React from 'react'
import styles from '../style'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className={` pt-16 pb-6  `}>
    <div className="md:flex md:justify-between py-16">
        <div className="mb-6 md:mb-0 md:w-[40%]">
            <img  className="py-4" src={logo} />
            <p className="font-poppins font-normal text-[#58595D] text-[16px]  leading-[22.8px] mb-8 md:mb-0">
            Our team of nutritionists and health specialists are committed to help you lead a healthy life.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 font-poppins">
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-secondary">Services</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Coaching</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Mental health  </a>
                    </li>
                    <li >
                        <a href="#" className="hover:underline">Nutrition</a>
                    </li>
                </ul>
            </div>
            <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-secondary">Contact us</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="mailto:info@vellbe.life" className="hover:underline ">info@vellbe.life</a>
                    </li>
                    
                </ul>
            </div>
            <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-secondary">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6  sm:mx-auto  lg:my-6" />
    <div className="items-center ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Vellbe life</a>. All Rights Reserved.
        </span>
    </div>
</footer>
  )
}

export default Footer