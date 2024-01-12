


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export const PromoSection = () => {
  return (
    <>
    {/* heading */}
    <h1 className='  text-xl mb-2'>Use your credit</h1>
    <div className=" flex items-center gap-x-3">
        <Input
        placeholder='Promo Code'
        className=' focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none p-3'
        />
        <Button
        className=' bg-white border-sky-400 border-2 text-sky-700 hover:bg-white hover:opacity-70'
        >
            Apply
        </Button>
    </div>
    </>
  )
}
