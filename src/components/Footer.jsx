import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="">
      <div >
        <p className="text-xs text-gray-500">
           

        <a href="https://ip.im"><img src="https://ip.im/img" alt="My IP Address" width="215" height="70" /></a>
        <a href="https://39mi.com" target="_blank" style="text-decoration:none; display:inline-flex; align-items:center; font-size:10px; color:#dedede;"> <img src="https://park.39mi.com/img/domainking.svg" style="margin-right:10px;"> <img src="https://park.39mi.com/img/tx.svg" height="auto" width="150" style="margin-right:10px;"> owner </a>


          
        </p>
      </div>
    </footer>
  );
}
