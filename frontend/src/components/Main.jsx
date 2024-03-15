import React, { useState } from 'react';
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Products'

import Verification from '../assets/verificationmodal'

import Footer from './footer'


function Main() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleConfirm18 = () => {
    console.log("User confirmed they are 18 or older.");
    setIsModalOpen(false);
  };

  const handleNot18 = () => {
    console.log("User indicated they are not 18.");
    setIsModalOpen(false); // Close the modal
    // Redirect the user to Google
    window.location.href = 'https://www.google.com'; 
  };


  return (
    <>
    
        <Home/>
        <About/>
        <Product/>

        <Footer/>

        <Verification
        isOpen={isModalOpen}
        onConfirm18={handleConfirm18}
        onNot18={handleNot18}
      />
       
    </>
  )
}

export default Main
