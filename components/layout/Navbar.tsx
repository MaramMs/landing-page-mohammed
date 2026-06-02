"use client";
import { useState } from "react";

const navLinks = [
  { label: "الحسابات", href: "#social" },
  { label: "خصم العنيني", href: "#discount" },
  { label: "العروض", href: "#offer" },
  { label: "مجالات التعاون", href: "#help" },
  { label: "التغطيات", href: "#interview" },
  { label: "التوثيق", href: "#offical" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 right-0 left-0 z-50 bg-[#FAFAFA] backdrop-blur-md shadow-sm border-b border-[#12183D] border-width-[0.5px]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9.5 h-9.5 rounded-[50%] flex items-center justify-center">
            <img src='/assets/person.jpg' alt="Logo" className="w-9.5 h-9.5 rounded-[50%]" />
          </div>
          <div>
            <p className="font-bold text-[#4D96FF] text-[18px] leading-tight">العنيني | aloniniyb</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-normal text-[#203F6B] hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <button className="bg-[#4D96FF] text-white text-sm py-[12px] px-[24px] rounded-2xl hidden md:block">تابعني</button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Changed to absolute positioning to float over content */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-gray-200 shadow-lg px-6 py-4 flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-primary py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-[#4D96FF] text-white text-sm py-[12px] px-[24px] rounded-2xl w-full">تابعني</button>
        </div>
      )}
    </nav>
  );
}
