'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import kemendag from '../../public/kemendag.svg';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      };
      setCurrentTime(now.toLocaleString('id-ID', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-white p-6 grid grid-cols-3 text-[#130D24] border-b-4">
      <div className="flex items-center">
        <Image src={kemendag} width={100} height={100} alt="Kemendag" />
        <div className="w-px h-12 bg-gray-300 mx-4"></div> {/* Garis vertikal pemisah */}
        <h1 className="text-3xl">ISO 9001:2015</h1>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-xl">{currentTime}</p>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-2xl text-left">
          <p>SISTEM PENJAMINAN MUTU</p>
          <p>INSPEKTORAT JENDERAL</p>
          <p>KEMENTERIAN PERDAGANGAN</p>
          <p>REPUBLIK INDONESIA</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
