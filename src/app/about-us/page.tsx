'use client'
import BookingSystem from '@/components/contacts/Booking';
import Footer from '@/components/contacts/Footer';
import Hero from '@/components/contacts/HeroContact';
import Services from '@/components/contacts/Service';
import Headers from '@/components/Headers';
import React, { useState } from 'react'

const page = () => {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
    const addToast = (message: string) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };
  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-x-hidden selection:bg-[#43f54c] selection:text-white`}
    >
      <Headers addToast={addToast} />
      <main className='flex-grow'>
        <Services /> 
      </main>
      <Footer />
    </div>
  );
}

export default page
