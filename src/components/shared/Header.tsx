import Image from 'next/image'
import React from 'react'
import LOGO from "../../assets/MotionArtEffect-logo.png"

const Header = () => {
  return (
    <header className=''>
      <section className='flex justify-between min-h-9 bg-red-400'>
        <Image src={LOGO} width={200} height={100} alt=''/>
        <button className='bg-white text-lg text-black  rounded-md px-5 py-3' type='button'>
          Purchase Now
        </button>
      </section>
    </header>
  )
}

export default Header