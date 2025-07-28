import List from '@/components/Artwork/List'
import Title from '@/components/Artwork/Title'
import Navbar from '@/components/Navbar'
import { AnimatedSection } from '@/components/ui/animated-section'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <AnimatedSection><Title/></AnimatedSection>
    <AnimatedSection><List/></AnimatedSection>
    </>
  )
}

export default page