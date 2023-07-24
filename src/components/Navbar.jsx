import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }


  return (
    // HEADER
    <div className=' flex justify-between items-center h-24 max-w-7xl mx-auto px-4 text-white'>
        {/* TITULO O LOGO */}
        <h1 className='w-full text-3xl font-bold text-cyan-400 uppercase'>Logo</h1>

        {/* MENU */}
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-cyan-400'>Home</li>
            <li className='p-4 hover:text-cyan-400'>Company</li>
            <li className='p-4 hover:text-cyan-400'>Resources</li>
            <li className='p-4 hover:text-cyan-400'>About</li>
            <li className='p-4 hover:text-cyan-400'>Contact</li>
        </ul>


        {/* MOVIL MENU */}
        <div onClick={handleNav} className='block md:hidden'>
            {/* CAMBIAR ICONO AL HACER CLICK */}
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />  }
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500  md:hidden' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-cyan-400 uppercase m-4 pt-4'>Logo</h1>

        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600 hover:text-cyan-400'>Home</li>
            <li className='p-4 border-b border-gray-600 hover:text-cyan-400'>Company</li>
            <li className='p-4 border-b border-gray-600 hover:text-cyan-400'>Resources</li>
            <li className='p-4 border-b border-gray-600 hover:text-cyan-400'>About</li>
            <li className='p-4 hover:text-cyan-400'>Contact</li>
        </ul>
        </div>



    </div>
  )
}

export default Navbar