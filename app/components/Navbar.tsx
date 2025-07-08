'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full bg-white z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl text-black font-bold">Phouthasin</h1>

        {/* Hamburger */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-black text-2xl">
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`
            absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent
            px-4 sm:px-0 py-2 sm:py-0 z-40
            ${menuOpen ? 'block' : 'hidden'} 
            sm:flex sm:flex-row flex flex-col items-start sm:items-center 
            text-black text-sm sm:text-base
          `}
        >
          {[
            { href: '#about', label: 'About Me' },
            { href: '#skills', label: 'Skills' },
            { href: '#Soft Skills', label: 'Soft Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
            { href: '#Resume', label: 'Resume' },
          ].map((item, idx, arr) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block w-full sm:w-auto px-2 py-2 sm:py-0 sm:px-0 
                ${idx < arr.length - 1 ? 'border-b border-gray-300' : ''} sm:border-0
                sm:mx-3`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
