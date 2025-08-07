import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center  p-2 mt-2'>
        <h2 className='text-lg font-light'>Untitled Gallery</h2>

        <div className='flex flex-row gap-4'>
            <Link
                href="/share"
                className="text-gray-600 border border-gray-300 p-2"
              >
                Need help?
              </Link>
              <Link
                href="/share"
                className="text-gray-600 border border-gray-300 p-2"
              >
                Close
              </Link>
        </div>

        
    </div>
  )
}

export default Navbar