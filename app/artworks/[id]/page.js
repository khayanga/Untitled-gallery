'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { artPieces } from '@/data';
import ArtDetails from '@/components/Artwork/ArtDetails';

export default function Page() {
  const params = useParams(); 
    const artId = parseInt(params.id, 10);
    const art = artPieces.find(a => a.id === artId);
    if (!art) return notFound();

  return <ArtDetails art={art} />;
}
