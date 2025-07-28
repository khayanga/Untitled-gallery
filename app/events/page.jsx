import Gallery from '@/components/Events/Gallery'
import List from '@/components/Events/List'
import Title from '@/components/Events/Title'
import Navbar from '@/components/Navbar'
import { AnimatedSection } from '@/components/ui/animated-section'

import React from 'react'

const page = () => {
  return (
    <>
        <Navbar/>
        <AnimatedSection><Title/></AnimatedSection>
        <AnimatedSection><List/></AnimatedSection>
        <AnimatedSection><Gallery/></AnimatedSection>
        
        
    </>
  )
}

export default page