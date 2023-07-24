import React from 'react'
import Img1 from '../assets/design-responsive.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2'>
            <img src={Img1} alt="desing responsive" className='w-[500px] mx-auto my-4' />

            <div className='flex flex-col justify-center m-4'>
                <p className='uppercase text-cyan-400 font-bold'>Data Analytics Dashboard</p>
                <h2 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, molestiae. Ea repellat ratione, inventore, debitis nostrum quam est quod laborum sed aut dolor? Ratione numquam earum illum vitae voluptatem consectetur.</p>
                <button className='bg-black text-white w-48 rounded-md font-medium my-6 mx-auto px-3 hover:text-cyan-400'>Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default Analytics