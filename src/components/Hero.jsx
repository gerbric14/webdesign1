import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'



const Hero = () => {
    const el = useRef(null)

    useEffect(() =>{
        const typed = new Typed(el.current, {
            strings: ['BTB', 'VITE', 'SASS'],
            startDelay: 300,
            typeSpeed: 150,
            backDelay: 150,
            backSpeed: 150,
            // smartBackspace: true,
            showCursor: false,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };

    });

  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-cyan-400 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</p>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for <span className='text-cyan-400 md:text-5xl sm:text-4xl text-xl font-bold'
                    ref={el}
                /></p>
                
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 pt-2 mx-8'>Monitos your data analytics to increase renueve for BTB, VITE, & SASS platforms.</p>
            <button className='bg-cyan-400 w-48 rounded-md font-medium my-6 mx-auto md:mx-auto px-3 text-black hover:text-white'>Get Started</button>

        </div>
    </div>
  )
}

export default Hero