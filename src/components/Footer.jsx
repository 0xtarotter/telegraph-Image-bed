import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        <a href="https://39mi.com" target="_blank" style="text-decoration:none"><img src="https://park.39mi.com/img/by.svg" alt="Logo" height="auto" width="150"></a>
      </div>
    </footer>
  );
}
