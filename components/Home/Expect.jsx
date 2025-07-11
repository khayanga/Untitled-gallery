import { expectCards } from '@/data'
import Image from 'next/image'
import React from 'react'

const Expect = () => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16 sm:py-24'>
      <h1 className='text-[48px] md:text-left text-center font-medium'>What to expect </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 '>
        {expectCards.map((card, index) => (
          <div
            key={index}
            className='relative h-[400px]  overflow-hidden group shadow-lg'
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className='transition-transform duration-500 group-hover:scale-105'
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-200">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Expect
