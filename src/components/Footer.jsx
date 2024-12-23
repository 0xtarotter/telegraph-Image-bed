import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  flex flex-col justify-center items-center">
      <div >
        <p className="text-xs text-gray-500">
          <img src="https://park.39mi.com/img/by.svg" />
          <Link 
          href="https://39mi.com"
          className="text-blue-300  hover:text-red-900 ml-1"
          target="_blank"
          rel="noopener noreferrer"
          >
          Cloudflare Powered by ❤️
          </Link> 
          </p>
      </div>
    </footer>
  );
}
