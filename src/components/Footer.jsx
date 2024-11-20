import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        
        <p className="text-xs text-gray-500">
           
          <a href="https://39mi.com" target="_blank" style={{ textDecoration: 'none' }}>
  <img src="https://park.39mi.com/img/domainking.svg" />
  <img src="https://park.39mi.com/img/tx.svg" height="auto" width="150" />
  <span style={{ fontSize: '10px', color: '#dedede' }}>owner</span>
</a>





          
        </p>
      </div>
    </footer>
  );
}
