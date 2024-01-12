


import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/logo.png'

export const CreditSection = () => {
  return (
    <>
     {/* Heading*/}
     <h1 className='  text-xl mb-2'>Use your credit</h1>
        <div className=" flex items-center justify-between bg-white p-6 shadow-md rounded-md">
            {/* logo */}
            <div className="">
                <Image  
                src={Logo}
                alt='Site-Logo'
                width={60}
                height={60}
                />
            </div>

            {/* heading */}
            <div className=" text-muted-foreground">
            <p>MobiMatter Rewards</p>
            </div>

            {/* insufficient Button */}
            <div className=" bg-gray-400 text-muted p-1 rounded-md">
                <p className=' text-xs'>Insufficient Funds</p>
            </div>  
        </div>
    </>
  )
}
