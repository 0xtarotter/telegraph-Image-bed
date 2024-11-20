import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (


    <footer>

           
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '105vh', 
      margin: 0
    }}>
      <a href="https://39mi.com" target="_blank" style={{ textDecoration: 'none' }}>
        <img src="https://park.39mi.com/img/by.svg" alt="Logo" />
      </a>
    </div>


    </footer>
  );
}
