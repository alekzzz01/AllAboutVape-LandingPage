import React from 'react';

import Logo from '../images/header.png'

function VerificationModal({ isOpen, onConfirm18, onNot18 }) {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed z-50 inset-0`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">


        <div
          className="fixed inset-0"
          aria-hidden="true"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        >
          <div className="absolute inset-0 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >


          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-center">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4">

                <div className='w-full flex justify-center'>
                    <img src= {Logo} alt="" className='object-cover h-16'  />
                </div>

                <h3
                  className="text-lg leading-6 font-bold text-gray-900 mt-8 tracking-wider"
                  id="modal-headline"
                >
                  PLEASE VERIFY YOUR AGE
                </h3>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Our products, are intended for adult use only. We prioritize the protection of minors. Please confirm your age to proceed.
                  </p>
                </div>


              </div>

            </div>

          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:justify-center">

            <button
              onClick={onConfirm18}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-white hover:text-black hover:border-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-200 ease-in-out  "
            >
              Yes, I'm 18+
            </button>
            <button
              onClick={onNot18}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-black hover:text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-200 ease-in-out "
            >
              No, I'm not 18
            </button>
          </div>



        </div>
      </div>



    </div>
  );
}

export default VerificationModal;
