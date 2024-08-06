import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#F4F6F5]'>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="overflow-hidden rounded-lg order-last ">
        <Image
          alt=""
          src="/assets/woman.png"
          width={1000}
          height={1000}
          className="h-full w-full object-fill"
        />
      </div>

      <div className="lg:pt-40 lg:pl-6">
        <h2 className="text-2xl lg:text-5xl font-bold sm:text-4xl bg-[#FFFFFF] w-[100px] lg:w-[150px] rounded-md py-2 ">LET’S</h2>
        <h2 className="text-2xl lg:text-5xl font-bold sm:text-4xl">EXPLORE</h2>
        <h2 className="text-2xl lg:text-5xl font-bold sm:text-4xl bg-[#EBD96B] w-[150px] lg:w-[200px] rounded-md pb-2 ">UNIQUE</h2>
        <h2 className="text-2xl lg:text-5xl font-bold sm:text-4xl">CLOTHES.</h2>

        <p className="mt-4 text-[#191818]">Live for Influential and Innovative fashion!</p>

        <a
          href="#"
          className="mt-4 inline-block rounded bg-black px-8 py-2 lg:py-3 lg:px-12 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Shop Now
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero