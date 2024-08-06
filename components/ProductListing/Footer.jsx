import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="bg-[#F4F6F5]">
  <div className="mx-auto max-w-screen-xl px-4 pb-6  sm:px-6 lg:px-8">

    <div
      className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6"
    >
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Contact Us</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              +1(844) 326-98678
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Email Us </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Mon-Fri 9am-3pm PT
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Customers</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Start a Return
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Return Policy </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> FAQ </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Catalogue and Mailers </a>
          </li>
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About Group Gifting </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Company</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">About Us </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Subtainability
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Discover Review </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              Terms
            </a>
          </li>
        </ul>
      </div>

   

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-3">
        <p className="text-lg font-medium text-gray-900">Join us living fewer,better.Every day.</p>

        <div className="mx-auto mt-8 max-w-md sm:ms-0">
          <form className="mt-4">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
              <label htmlFor="email" className="sr-only">Email</label>

              <input
                className="w-full rounded-sm border-black border-2 px-6 py-3 shadow-sm"
                type="email"
                placeholder="Enter your email"
              />
              <p className='font-normal'>
                BY Signing up,you agree to our <span className='underline font-bold'>Privacy Policy</span> and <span className='underline font-bold'>Terms of Services</span>
              </p>

              <button
                className="block self-center rounded-lg bg-black px-8 py-3 font-medium text-white transition w-1/2"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
      <p className="text-center text-sm text-gray-500 sm:text-left">
        Copyright &copy; 2022. All rights reserved.
      </p>

     <p className='text-gray-500 text-center font-bold'> &copy; CEIN.</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer