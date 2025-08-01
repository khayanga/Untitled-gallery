'use client';
import { notFound, useParams } from 'next/navigation';
import { eventList } from '@/data';
import Navbar from '@/components/Navbar';
import ManageEvent from '@/components/Directors/Manage/ManageEvent';

export default function Page() {
  const params = useParams(); 
  const eventId = parseInt(params.id, 10); 
  const event = eventList.find(e => e.id === eventId);

  if (!event) return notFound();

  return (
    <main className='bg-gray-50'>
    <Navbar/>
    <ManageEvent event={event} />;
    </main>
  )
}
