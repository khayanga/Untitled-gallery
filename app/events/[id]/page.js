'use client';
import { notFound, useParams } from 'next/navigation';
import { eventList } from '@/data';
import EventDetails from '@/components/Events/EventDetails';

export default function Page() {
  const params = useParams(); 
  const eventId = parseInt(params.id, 10); 
  const event = eventList.find(e => e.id === eventId);

  if (!event) return notFound();

  return <EventDetails event={event} />;
}

