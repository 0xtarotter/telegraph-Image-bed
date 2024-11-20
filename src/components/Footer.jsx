import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
       
<Link href="https://39mi.com" passHref>
      <a target="_blank" style={{ textDecoration: 'none' }}>
        <Image
          src="https://park.39mi.com/img/by.svg"
          alt="Logo"
          width={150}
          height={auto} // Next.js的Image组件不会直接支持auto，通常你可以使用固定宽度或者高宽比。
          layout="intrinsic" // 可选，适应图片的原始宽高比
        />
      </a>
    </Link>


        
      </div>
    </footer>
  );
}
