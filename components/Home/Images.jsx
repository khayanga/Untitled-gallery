import Image from 'next/image'
import React from 'react'

const Images = () => {
  return (
     <div className="md:mt-12 mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <Image src="/foooter.png" alt="Footer 1" width={379} height={454} className="w-full h-auto object-contain" />
          <Image src="/footer2.png" alt="Footer 2" width={479} height={454} className="w-full h-auto object-contain" />
          <Image src="/footer1.png" alt="Footer 3" width={479} height={454} className="w-full h-auto object-contain" />
          <Image src="/footer4.png" alt="Footer 4" width={379} height={454} className="w-full h-auto object-contain" />
    </div>
        
  )
}

export default Images