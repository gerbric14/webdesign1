import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-3 px-4'>
            <div className='lg:col-span-2 my-2'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h2>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    <input type="email" 
                        placeholder='Enter Email'
                        className='p-3 flex w-3/4 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:bg-slate-500'                    
                    />
                    <button className='bg-cyan-400 w-48 rounded-md font-medium my-6 mx-auto md:mx-2 px-3 py-3 text-black hover:text-white'>Notify Me</button>
                </div>
                <p>We care bout protection of your data. Read our <span className='text-cyan-400'>Privacy Policy</span></p>


            </div>

        </div>

    </div>
  )
}

export default Newsletter