import React from 'react'
import Img2 from '../assets/3people.png'
import Img3 from '../assets/3p.png'

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>

            <div className='w-full border shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Img3} alt="card1" 
                    className='w-20 mx-auto mt-[-3rem]'
                />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold pb-2'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 border-t'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-cyan-400 w-48 h-10 rounded-md font-medium my-6 mx-auto md:mx-auto px-3 text-black hover:text-white'>Start Trial</button>
            </div>

            <div className='w-full bg-gray-100 border shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img src={Img3} alt="card1" 
                    className='w-20 mx-auto mt-[-3rem]'
                />
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold pb-2'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 border-t border-gray-300'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8 border-gray-300'>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8 border-gray-300'>Send up to 10 GB</p>
                </div>
                <button className='bg-cyan-400 w-48 h-10 rounded-md font-medium my-6 mx-auto md:mx-auto px-3 text-black hover:text-white'>Start Trial</button>
            </div>

            
            <div className='w-full border shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Img3} alt="card1" 
                    className='w-20 mx-auto mt-[-3rem]'
                />
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold pb-2'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 border-t'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 200 GB</p>
                </div>
                <button className='bg-cyan-400 w-48 h-10 rounded-md font-medium my-6 mx-auto md:mx-auto px-3 text-black hover:text-white'>Start Trial</button>
            </div>

        </div>
    </div>
  )
}

export default Cards