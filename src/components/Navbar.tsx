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
    <nav className="bg-white p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 text-[#130D24] border-b-2 border-blue-950">
      <div className="flex flex-col md:flex-row items-center">
        <Image src={kemendag} width={80} height={80} alt="Kemendag" className="mb-2 md:mb-0" />
        <div className="w-full md:w-px h-0.5 md:h-[120px] bg-blue-950 mx-4"></div>
        <h1 className="text-2xl md:text-3xl">ISO 9001:2015</h1>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-0">
        <p className="text-xl md:text-2xl text-blue-950">{currentTime}</p>
      </div>
      <div className="flex items-center justify-end mt-4 md:mt-0">
        <div className="text-lg md:text-2xl text-left">
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
