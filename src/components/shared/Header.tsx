import Image from 'next/image'
import React from 'react'
import LOGO from "../../assets/MotionArtEffect-logo.png"

const Header = () => {
  return (
    <header className=''>
      <section className='mx-5 flex justify-between'>
        <Image src={LOGO} width={200} height={100} alt=''/>
        <button className='bg-white text-md text-black rounded-md items-center my-2 px-3 py-1' type='button'>
          Purchase Now
        </button>
      </section>
    </header>
  )
}

export default Header