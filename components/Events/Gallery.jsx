import { eventGallery, expectevents } from '@/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className='bg-gray-50 py-16 '>
        <section className="mx-auto max-w-7xl px-6  ">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                 <div className="w-full md:w-auto text-center md:text-left">
                   <h1 className="text-[32px] font-semibold">
                     Explore shows in other cities
                   </h1>
                 </div>
         
                 <div className="flex items-center gap-4 p-2 ">
                   <button className="p-2 bg-white hover:bg-gray-200 transition rounded">
                     <ArrowRight className="w-5 h-5 text-gray-700" />
                   </button>
                 </div>
               </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 ">
           {eventGallery.map((event, index) => (
             <div
               key={index}
               className="relative h-[400px]  overflow-hidden group shadow-lg"
             >
               {/* Background Image */}
               <Image
                 src={event.image}
                 alt={event.title}
                 fill
                 style={{ objectFit: "cover", objectPosition: "center" }}
                 className="transition-transform duration-500 group-hover:scale-105"
               />
   
               {/* Overlay Content */}
               <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                 <div className="text-white">
                   <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                   
                 </div>
               </div>
             </div>
           ))}
         </div>
       </section>

    </div>
    
  )
}

export default Gallery