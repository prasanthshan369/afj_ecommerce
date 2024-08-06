import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <Link href={'/cart'} class="bg-white shadow-xl h-16 ">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
    <div class="block md:hidden">
            <button class="rounded bg-gray-100 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
      <div class="flex-1 md:flex md:items-center md:gap-12">
        
      <Link href={'/'} className='font-bold text-3xl text-center pl-10 lg:text-start '>CEIN.</Link>
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Shop </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#">New Arrivas </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Sales </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Journy </a>
            </li>
           
          </ul>
        </nav>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <div class="flex items-center gap-2">
<div className='flex flex-row items-center px-1 lg:px-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
<p className='hidden lg:block'>Stores</p>
</div>
<div className='flex flex-row items-center px-1 lg:px-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
<p>0</p>
</div>

<div className='flex flex-row items-center px-1 lg:px-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
<p>0</p>
    </div>


            

          
        </div>
      </div>
    </div>
  </div>
</Link>
  )
}

export default Header