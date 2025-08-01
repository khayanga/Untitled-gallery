import Dashboard from '@/components/Curators/Dashboard'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
    <Navbar/>
    <Dashboard/>
    
    </div>
  )
}

export default page