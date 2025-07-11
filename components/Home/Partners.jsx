import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Partners = () => {
  return (
     <section className=" mx-auto max-w-7xl px-6 py-24 sm:py-32 ">
        <div className="mx-auto max-w-2xl  text-center ">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 ">
            Our Partners, Our Strength
          </h2>
          <p className="mt-8 text-md font-medium text-gray-600">
            From galleries to tech innovators, our partners help amplify emerging talent and elevate the art world. 
            </p>
        </div>

        <div className="flex flex-col items-center  mt-4 md:mt-8 ">
            <Button className='p-6 mx-auto bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors'>
            <Link href="/signin">Become a partner </Link>
          </Button>

          <div className=' mt-4 md:mt-8'>
            <Image
            src="/logos.png"
            alt="Partners Image"
            width={2400}
            height={1700}
            className="w-full h-auto object-cover object-right md:object-center"
          />

          </div>

          
         
        </div>
       
      </section>
  )
}

export default Partners