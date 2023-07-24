import React from 'react'
import {
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare,
    FaFacebookSquare,
    FaDribbbleSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300 px-4'>
        <div>
            <h1 className='w-full text-3xl font-bold text-cyan-400 uppercase'>Logo</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias placeat repellat soluta dignissimos ea explicabo nisi suscipit impedit perspiciatis, saepe corporis, nobis nulla, iusto sint. Aut magnam ullam culpa!</p>
            <div className='flex justify-between md:w-3/4'>
                <FaInstagram size={30}/>
                <FaGithubSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaFacebookSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-8'>
            <div>
                <h6 className='font-medium text-gray-400 px-2'>Solutions</h6>
                <ul>
                    <li className='p-2 text-sm hover:text-cyan-400'>Analytics</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Marketing</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Commerce</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400 px-2'>Support</h6>
                <ul>
                    <li className='p-2 text-sm hover:text-cyan-400'>Pricing</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Documentation</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Guides</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400 px-2'>Company</h6>
                <ul>
                    <li className='p-2 text-sm hover:text-cyan-400'>About</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Blog</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Jobs</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Press</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Careers</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400 px-2'>Legal</h6>
                <ul>
                    <li className='p-2 text-sm hover:text-cyan-400'>Claim</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Policy</li>
                    <li className='p-2 text-sm hover:text-cyan-400'>Terms</li>

                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer