import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        <p className="text-xs text-gray-500">
           

        <a href="https://ip.im"><img src="https://ip.im/img" alt="My IP Address" width="215" height="70" /></a>
       
          
        </p>
      </div>
    </footer>
  );
}
