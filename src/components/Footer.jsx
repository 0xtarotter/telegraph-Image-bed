import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">

        
        <p className="text-xs text-gray-500">
           
        <a href="https://39mi.com" target="_blank" style="text-decoration:none;">
          <img src="https://park.39mi.com/img/by.png" />
          </a>




          
        </p>

    </footer>
  );
}
