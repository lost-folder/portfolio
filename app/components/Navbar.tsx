"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./img/sword2.png";
import scroll from "../components/img/scroll2.png";
import Home from "../components/img/home.png";
import mssg from "./img/mssg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full absolute   z-10 bg-white shadow-md ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800  flex justify-between items-center"
        >
          <Image
            src={Logo}
            alt="Sword"
            width={70}
            placeholder="blur"
            quality={100}
          />
          <span className="text-4xl font-body font-bold text-gray-800 ml-2">
            SAIF
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            {/* <Image title="about me " src={scroll} alt="Scroll" width={70} height={60} /> */}
              About me
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-800">
            {/* <Image title="projects" src={Home} alt="Message" width={60} height={60} /> */}
            Projects
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            {/* <Image
              title="contact me"
              src={mssg}
              alt="Message"
              width={60}
              height={60}
            /> */}
            Contact me
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-md`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About me
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-800">
            servies
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
