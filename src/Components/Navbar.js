import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const url ="https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
function Navbar() {
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <div className="fixed flex w-full h-[50px] bg-black text-white z-10">
      <a href="/">
        <img
          className="ml-3 mt-3"
          src={url}
          alt="netfliximg"
          width={95}
          height={25}
        />
      </a>
      <div
        className={`sm:w-auto sm:h-auto w-200 h-screen sm:text-white text-white mt-3 ml-3 gap-3 sm:bg-transparent bg-black sm:flex hidden z-50  ${
          isMenuModal === true &&"absolute  !grid place-content-start ml-20 mt-12 opacity-80 w-32 h-44 "}`}>
        <a href="/">Ana sayfa </a>
        <a href="/">Diziler</a>
        <a href="/">Filmler </a>
        <a href="/">Yeni ve Popüler </a>
        <a href="/">Listem </a>
        {isMenuModal && (
          <button
            className="absolute  z-50"
            onClick={() => setIsMenuModal(false)}
          >
            <GiCancel size={25} className=" relative left-24" />
          </button>
        )}
      </div>
      <div>
        <button className="sm:hidden inline-block" onClick={() => setIsMenuModal(true)}>
          <GiHamburgerMenu className="text-2xl  ml-6 mt-3" />
        </button>
      </div>

      <div className="absolute flex mt-3  gap-4 right-12 cursor-pointer">
        <p className="flex mt-1"><BsSearch /> </p>
        <p> Çocuk</p>
        <p className="flex mt-1"> <FaRegBell/></p>
        <img className="w-[40px] h-[32px]" src="leo.png" alt="leo" />
      </div>
    </div>
  );
}


export default Navbar;

