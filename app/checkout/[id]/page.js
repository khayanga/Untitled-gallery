'use client'
import ShippingModal from '@/components/shipping/ShippingModal';
import { artPieces } from '@/data';
import { notFound, useParams } from 'next/navigation';
import React from 'react'

const page = () => {

    const params = useParams(); 
        const artId = parseInt(params.id, 10);
        const art = artPieces.find(a => a.id === artId);
        if (!art) return notFound();
    
  return <ShippingModal art={art} />;
}

export default page