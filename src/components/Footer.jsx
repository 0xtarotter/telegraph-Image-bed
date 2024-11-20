import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        
        <p className="text-xs text-gray-500">
           
          <a href="https://39mi.com" target="_blank" style="text-decoration:none; display: inline-flex; align-items: center;"> 
  <img src="https://park.39mi.com/img/domainking.svg" style="margin-right: 10px;" /> 
  <img src="https://park.39mi.com/img/tx.svg" height="auto" width="150" /> 
  <span style="font-size:10px;color:#dedede; margin-left: 10px;">owner</span> 
</a>





          
        </p>
      </div>
    </footer>
  );
}
