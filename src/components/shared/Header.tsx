import Image from 'next/image'
import React from 'react'
import LOGO from "../../assets/MotionArtEffect-logo.png"

const Header = () => {
  return (
    <header className='sm:bg-pink-300 md:bg-cyan-500 lg:bg-blue-800 xl:bg-teal-700'>
      <section className='mx-5 flex justify-between'>
        <Image src={LOGO} width={200} height={100} alt=''/>
        <button className='bg-white text-xs text-black rounded-md items-center my-2 px-3 py-1' type='button'>
          Purchase Now
        </button>
      </section>
    </header>
  )
}

export default Header