import React from 'react';

import Logo from "../images/logo.png";

function Footer() {


  return (
    <section className="w-full pt-36" id="footer">
      <div class="max-w-8xl mx-auto container text-white px-4 lg:px-8 text-center md:text-left lg:text-left">
        <div className="py-10 flex justify-center md:justify-start lg:justify-start">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 border-y-2  border-neutral-400">
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Drops
            </h6>
            <p className="mb-4 opacity-60 hover:opacity-100">Latest Products</p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              About
            </h6>
            <a href="#about" className=" block mb-4 opacity-60 hover:opacity-100">About us</a>
            <a href="#products" className="block mb-4 opacity-60 hover:opacity-100">Products</a>
            <a href="/contactus" className="block mb-4 opacity-60 hover:opacity-100">Contact us</a>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Locations
            </h6>
            <p className="mb-4 opacity-60 hover:opacity-100 italic">
              Brgy. Pinagsama, <br></br> Taguig City - Main Branch
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              SOCIAL MEDIA
            </h6>

            <p className="mb-4">
              Follow us on social media to stay updated on our products.
            </p>

            <div className="flex justify-center md:justify-start lg:justify-start">
              <a
                href="https://www.facebook.com/AllAboutvapesss"
                class="mr-6 text-neutral-600 dark:text-neutral-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
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

              <a href="https://www.instagram.com/allaboutvape.ph/" class="mr-6 text-neutral-600 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    target="_blank"
                    rel="noopener noreferrer" />
                </svg>
              </a>

              
            </div>
          </div>
        </div>

        <div className="py-10 flex flex-wrap align-center justify-center gap-4 md:justify-between lg:justify-between text-xs">
          <div>
            <p className="opacity-60 hover:opacity-100">
              © 2024, ALL ABOUT VAPE SHOP
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <p className="opacity-60 hover:opacity-100">Terms of Service</p>
            <p>·</p>
            <a href='/privacypolicy' className="opacity-60 hover:opacity-100">Privacy Policy</a>
            <p>·</p>
            <p className="opacity-60 hover:opacity-100">Refund Policy</p>
          </div>

          <div>
            <p className="opacity-60 hover:opacity-100">
              Developed by: Alexander Fajartin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
