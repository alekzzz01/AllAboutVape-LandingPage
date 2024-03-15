import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../components/Contactus.css'
import GoogleMap from '../assets/Map'
import Accordion from '../assets/Accordion';

import Footer from './footer'

function ContactUs() {


  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m630shb', 'template_ualrdr6', e.target, 'MHAi8uTnxVLFvJHlf')
        .then((result) => {
            console.log(result.text);
            setStatus('Email sent successfully');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            setStatus('Error sending email. Please try again later.');
            });
    };

  const accordionItems = [
    {
        title: 'Accordion Item 1',
        content: 'Content for Accordion Item 1',
    },
    {
        title: 'Accordion Item 2',
        content: 'Content for Accordion Item 2',
    },
    {
        title: 'Accordion Item 3',
        content: 'Content for Accordion Item 3',
    },
];


  return (
    <>
    <section className='w-full pt-36'>


    <div className='max-w-8xl mx-auto container text-white px-4 lg:px-8 pt-12'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 first-section'>

                <form className='col-span-2' onSubmit={handleSubmit}>
                
                    <h1 className='text-4xl font-bold'>Get in touch</h1>
                    <p className='mt-12 mb-3 font-medium'>Send a message</p>
                    <p className='opacity-60 font-extralight tracking-wide'>We warmly welcome and value your suggestions and comments. Here at <span className='font-semibold italic'>ALL ABOUT VAPE</span>, every opinion holds great significance to us.</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14 mb-8'>
                        <div className="relative z-0 w-full group">
                            <input type="text" name='fullname'  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer autofill:bg-transparent" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>

                        <div className="relative z-0 w-full group">
                            <input type="email" name='email'  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer autofill:bg-transparent" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 mt-4 mb-12'>

                        <div className="relative z-0 w-full group">
                            <input type="text"  name='contact' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer autofill:bg-transparent" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number</label>
                        </div>

                        <div className="relative z-0 w-full group">
                            <input type="text"  name='subject' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer autofill:bg-transparent" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                        </div>

                        <div className="relative z-0 w-full group mt-4">
                            <label htmlFor="message" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" name='message' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message..."></textarea>
                        </div>
                    </div>
                    <button type='submit' className='py-3 px-6 leading-none border rounded text-black bg-white hover:border-white hover:text-white hover:bg-transparent lg:mt-0 transition duration-500 ease-in-out w-full'>Send Message</button>
                    <div className='text-center mt-4'>
                    {status && <p>{status}</p>}
                    </div>
                
                </form>



                <div className='flex flex-col gap-6 col-span-1'>
                      <div>
                          <p className='font-medium'>Call us</p>
                          <p className='opacity-60 font-light mt-3 tracking-wide'>+63 912 345 6789</p>
                      </div>

                      <div>
                          <p className='font-medium'>Visit Us</p>
                          <p className='opacity-60 font-light mt-3  tracking-wide'>at 9th Avenue, Brgy. Pinagsama, Taguig City</p>
                      </div>

                      <div>
                          <p className='font-medium'>Socials</p>

                              <div className="flex justify-start mt-4">
                                <a
                                  href="https://www.facebook.com/AllAboutvapesss"
                                  className="mr-6 text-neutral-600 dark:text-neutral-200"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    />
                                  </svg>
                                </a>

                                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                  </svg>
                                </a>

                                
                              </div>
                      </div>

                </div>



          </div>


          <div className='mt-24'>
              <h1 className='mb-12 text-center text-4xl font-bold'>Location</h1>
              <GoogleMap />
          </div>



          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 faq-section mt-24'>

                    <div className='flex flex-col gap-2 col-span-2'>

                          <p className='text-2xl font-light' style={{ letterSpacing: '5px' }}>FAQ</p>

                          <h1 className='text-5xl font-extrabold' style={{ lineHeight: '1.2' }}>
                              Frequently <br />
                              asked <br />
                              Questions
                          </h1>

                    </div>


                    <div className="accordion-container">
                        <Accordion items={accordionItems} />
                    </div>


          </div>
        */}


      

        <div className="accordion-container mt-24">
                        <h1 className='mb-12 text-center text-4xl font-bold'>FAQ's</h1>
                        <Accordion items={accordionItems} />
        </div>




         



    </div>





    </section>


    <Footer />

    </>
  )
}

export default ContactUs
