import React from "react";
import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';

// const url= "https://image.tmdb.org/t/p/w500"
const url =
  "https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

function Navbar() {
  return (
    <div className="fixed flex w-full h-[50px] bg-black text-white z-10">
      <a href="/"> <img className="ml-3 mt-3"  src={url} alt="netfliximg" width={95} height={25} /></a>
      <div className="flex mt-3 ml-4 gap-4 none">
        <a href="/">Ana sayfa </a>
        <a href="/">Diziler</a>
        <a href="/">Filmler </a>
        <a href="/">Yeni ve Popüler </a>
        <a href="/">Listem </a>
      </div>
      <div className="absolute flex mt-3  gap-4 right-12 cursor-pointer">
        <p className="flex mt-1"> <BsSearch/> </p>
        <p> Çocuk</p>
        <p className="flex mt-1"><FaRegBell/> </p>
      <img className="w-[40px] h-[32px]" src="leo.png" alt="leo"/>
      </div>
    </div>
  );
}

export default Navbar;
