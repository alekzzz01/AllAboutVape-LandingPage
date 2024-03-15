import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Logo from '../images/logoround.png';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the animation duration as needed
      once: true // Set to true if you want the animation to occur only once
    });
}, []);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">

        <div className='max-w-8xl mx-auto container'>

        <div className='py-4 lg:px-8 mx-4 lg:mx-0'>

                <div className='flex items-center justify-between flex-wrap '>
    
                        <div className="mr-12"  data-aos="fade-down">
                            <a href="/main"> {/* Wrap the logo with an anchor tag */}
                            <img src={Logo} alt="Logo" className='w-24 h-24' />
                            </a>
                        </div>


                        <div className="block lg:hidden"  data-aos="fade-down">
                            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white hover:border-zinc-500 hover:text-zinc-500">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                        </div>

                        <div className={`${showMenu ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>

                            <div className="text-sm lg:flex-grow"  data-aos="fade-down">
                                <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white bg-zinc-900 hover:bg-zinc-700 transition duration-500 ease-in-out mr-0 lg:mr-6 py-3 px-6 rounded text-center">
                                    HOME
                                </a>
                                <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white bg-zinc-900 hover:bg-zinc-700 transition duration-500 ease-in-out mr-0 lg:mr-6 py-3 px-6 rounded text-center">
                                    ABOUT
                                </a>
                                <a href="#products" className="block mt-4 lg:inline-block lg:mt-0 text-white bg-zinc-900 hover:bg-zinc-700 transition duration-500 ease-in-out mr-0 lg:mr-6 py-3 px-6 rounded text-center">
                                    PRODUCTS
                                </a>

                                
                                

                                
                            </div>

                            <div  data-aos="fade-down">

                                <a href="/contactus" className="inline-block text-sm py-3 px-6 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 transition duration-500 ease-in-out w-full text-center">CONTACT US</a>
                            </div>

                        </div>


                </div>

            </div>

        </div>

    </nav>
  );
}

export default Navbar;
