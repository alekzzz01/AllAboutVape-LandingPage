import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AdvocateImage from '../images/ADVOCATE.jpg'

function About() {


    useEffect(() => {
        AOS.init({
          duration: 1000, // Adjust the animation duration as needed
          once: true // Set to true if you want the animation to occur only once
        });
      }, []);
      
      

  return (  
    <section
    className='w-full pt-36'
    id='about'
  > 


    <div className='max-w-8xl mx-auto container text-white px-4 lg:px-8'>


          <div className='flex flex-col-reverse lg:flex-row mb-24'>

              <aside className='w-96' data-aos="fade-up">
                      <h1 className="invisible text-transparent text-5xl font-extrabold">a</h1>

                      <div className='mt-14 text-2xl flex gap-6 flex-col'> 
                        <p className=''>About us.</p>
                        <p>Our team.</p>
                        <p>Press.</p>
                      </div>
                    
                
              
              </aside>

              <main className='w-full' data-aos="fade-up">
                        <h1 className='text-4xl font-extrabold'>About Us</h1>
                        

                        <div className='mt-14 text-lg font-extralight opacity-60 tracking-wide flex flex-col gap-14 text-justify' style={{ lineHeight: '2' }}>
                              <p>
                              It was founded by Francis Querubin with his associate John Paul Villalva, who shared a vision from the shop's concept, finalizing the details to selecting the appropriate products to create a unique vaping experience for customers, with the goal of providing vapers with a safe and reliable source for their vaping needs.
                              </p>

                              <p>
                              The concept for the shop emerged during the challenging times of the pandemic, but due to uncertain events, it was put on hold. It wasn't until July of 2023 that the logo was created, and we began to conceptualize and bring it to life in early 2024. ALL ABOUT VAPE unveiled its distinctive logo, which symbolizes our commitment to excellence and quality. The design of the logo reflects the simple yet modern and dynamic nature of our shop, as well as our dedication to staying ahead of the curve in the constantly evolving world of vaping.
                              </p>

                        </div>
                    



              </main>
          </div>


          <hr class="h-px border dark:border-neutral-400"></hr>


          <div className='mt-24 team-section mb-24' data-aos="fade-up">
          
                    <div className='mt-14 text-lg font-extralight tracking-wide flex flex-col gap-14 text-justify' style={{ lineHeight: '2' }}>
                                    <p className='text-4xl font-extrabold text-center'>
                                    Welcome to <span className='italic'>ALL ABOUT VAPE</span> 
                                    </p>


                                    <p className='opacity-60'>
                                    We strive to create a welcoming and inclusive environment for you, where you can feel comfortable while exploring our new products and flavors. At ALL ABOUT VAPE, we are passionate about providing high-quality vaping products to you. Our objective is to stay up-to-date with the latest trends and innovations in the vaping industry, and offer fair and affordable products so that everyone can enjoy high-quality vaping experiences without breaking the bank. Your satisfaction is our top priority, and we are dedicated to ensuring that every visit to our shop is an enjoyable one.
                                    </p>

                                    <p className='opacity-60'>
                                    As we look to the future, we are excited to continue growing and evolving and look forward to serving the vaping community for many years to come, not just in Taguig but also in other cities in Metro Manila.
                                    </p>

                                    <p className='opacity-60'>
                                    We are immensely grateful to all our friends who have supported us in making ALL ABOUT VAPE a reality. Your encouragement and assistance have been invaluable, and we are truly thankful for your friendship. We also want to acknowledge the role of our creator God, whose guidance and blessings have brought this shop to life. We are humbled by the opportunity to serve the vaping community and look forward to continuing this journey with all of you by our side. Thank you for believing in us and for being a part of our story.
                                    </p>

                                    <p className='opacity-60'>
                                    Thank you for your continued support and for choosing ALL ABOUT VAPE as your vaping destination. We wouldn't be here without you!
                                    </p>

          
                                


                    </div>

                    {/* <h1 className='text-4xl font-bold text-center mt-14 '>Meet Our Team</h1> */}

                    <div className='grid gap-6 mt-14'>

                        {/* <div>
                        <div class="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end" >                           
                                        <div>
                                            <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">                                                
                                                <div class="font-bold">Francis Querubin</div>
                                                <div class="opacity-60 text-sm">
                                                    Business Propriator
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        alt=""
                                        class="object-cover w-full aspect-video group-hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/371545785_745539127397028_2208234318035608576_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHgn6RtImuwiCbJh5WlreTfDbrarE-B0KINutqsT4HQou2ABtUH1GL8fMMBgTKKdQSr5NPPkDJawVS29FfkweKp&_nc_ohc=0PTbdP2HjN0AX-zSo8t&_nc_ht=scontent.fmnl30-2.fna&oh=03_AdSwUbbOdjt-3GwrU81gIuNsYLLQtj90xT-nDa7dArudHA&oe=660A6A51"
                                    />
                        </div>
                        </div> */}

                        
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>

                                    <div class="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" data-aos="flip-right">
                                            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end" >                           
                                                <div>
                                                    <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">                                                
                                                        <div class="font-bold">John Paul R. Villalva</div>
                                                        <div class="opacity-60 text-sm ">
                                                            Business Associate
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                alt=""
                                                class="object-cover w-full aspect-video group-hover:scale-110 transition duration-300 ease-in-out"
                                                src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/371545785_745539127397028_2208234318035608576_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHgn6RtImuwiCbJh5WlreTfDbrarE-B0KINutqsT4HQou2ABtUH1GL8fMMBgTKKdQSr5NPPkDJawVS29FfkweKp&_nc_ohc=0PTbdP2HjN0AX-zSo8t&_nc_ht=scontent.fmnl30-2.fna&oh=03_AdSwUbbOdjt-3GwrU81gIuNsYLLQtj90xT-nDa7dArudHA&oe=660A6A51"
                                            />
                                    </div>

                                    <div class="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" data-aos="flip-left">
                                            <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end" >                           
                                                <div>
                                                    <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">                                                
                                                        <div class="font-bold">John Paul R. Villalva</div>
                                                        <div class="opacity-60 text-sm ">
                                                            Business Associate
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img
                                                alt=""
                                                class="object-cover w-full aspect-video group-hover:scale-110 transition duration-300 ease-in-out"
                                                src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/371545785_745539127397028_2208234318035608576_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHgn6RtImuwiCbJh5WlreTfDbrarE-B0KINutqsT4HQou2ABtUH1GL8fMMBgTKKdQSr5NPPkDJawVS29FfkweKp&_nc_ohc=0PTbdP2HjN0AX-zSo8t&_nc_ht=scontent.fmnl30-2.fna&oh=03_AdSwUbbOdjt-3GwrU81gIuNsYLLQtj90xT-nDa7dArudHA&oe=660A6A51"
                                            />
                                    </div>

                                </div>
            
                    </div>
   
          </div>

          <div className='w-full mt-24' data-aos="fade-up">
              <img src={AdvocateImage} alt="" class="rounded-xl object-cover opacity-90"/>
          </div>


          

    </div>




    </section>

  )
}

export default About
