import { artPieces } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Artwork = () => {
  return (
    <div className='p-4'>
        <h1 className="text-2xl font-light text-gray-800">Your art collection</h1>
        <p className='text-gray-600 text-sm tracking-wider mt-2'>See all your paid artworks and track them.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:pb-24 mt-12">
                {artPieces.slice(0,4).map((piece) => (
                  <Link href={`/artworks/${piece.id}`} key={piece.id}>
                  <div
                    key={piece.id}
                    className="bg-white border shadow-sm overflow-hidden"
                  >
                    {/* Image Section with Gradient Background */}
                    <div className="relative bg-gray-100 p-10">
                      <Image
                        src={piece.image}
                        alt={piece.title}
                        width={400}
                        height={250}
                        className="w-full h-[250px] object-cover"
                      />
                      {/* Status Badge */}
                      <span className="absolute top-2 right-2 text-[11px] font-medium bg-white text-black px-2 py-1 shadow-sm uppercase">
                        {piece.status}
                      </span>
                    </div>
        
                    {/* Text Content */}
                    <div className="p-4 bg-white">
                      {/* Title + Price Row */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-sm font-medium">{piece.title}</h3>
                          <p className="text-xs text-gray-500 mt-1">
                            By {piece.artist}
                          </p>
                        </div>
                        <p className="text-md font-semibold whitespace-nowrap">
                          {piece.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  </Link>
                  
                ))}
              </div>
        

    </div>
  )
}

export default Artwork