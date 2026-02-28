"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '@/assets/logo/Doitright.png';

// ── Main Navbar
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="">
        <div className="xl:container mx-auto px-6 h-14 flex items-center justify-between gap-6">

          {/* LEFT: Logo */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image src={logo} alt="DoItRight Logo" height={36} className="object-contain" />
            </Link>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/find-jobs"
                className="text-[14.5px] font-medium text-[#374151] hover:text-[#4f46e5] transition-colors duration-150"
                style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
              >
                Find Jobs
              </Link>
              <Link
                href="/browse-companies"
                className="text-[14.5px] font-medium text-[#374151] hover:text-[#4f46e5] transition-colors duration-150"
                style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
              >
                Browse Companies
              </Link>
            </div>
          </div>

          {/* RIGHT: Auth buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden md:inline-flex items-center px-4 py-2 text-[14.5px] font-semibold text-[#4f46e5] hover:text-[#3730a3] transition-colors duration-150"
              style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="hidden md:inline-flex items-center px-5 py-2 text-[14.5px] font-semibold text-white bg-[#4f46e5] rounded-md hover:bg-[#3730a3] transition-colors duration-150"
              style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
            >
              Sign Up
            </Link>

            {/* Mobile menu button */}
            <button
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-[#1a1a2e] hover:bg-black/[0.07] transition-colors duration-150"
            >
              <FiMenu size={22} />
            </button>
          </div>

        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 bg-black/30 z-[199] transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-[200] flex flex-col gap-6 p-6 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setDrawerOpen(false)}>
            <Image src={logo} alt="DoItRight Logo" height={30} className="object-contain" />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/[0.07] transition-colors duration-150"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col">
          {[
            { href: "/find-jobs", label: "Find Jobs" },
            { href: "/browse-companies", label: "Browse Companies" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setDrawerOpen(false)}
              className="py-3.5 text-[15px] font-medium text-[#374151] border-b border-gray-100 hover:text-[#4f46e5] transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Drawer auth */}
        <div className="flex flex-col gap-3 mt-2">
          <Link
            href="/login"
            onClick={() => setDrawerOpen(false)}
            className="w-full text-center py-2.5 text-[15px] font-semibold text-[#4f46e5] border border-[#4f46e5] rounded-md hover:bg-[#4f46e5]/5 transition-colors duration-150"
          >
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setDrawerOpen(false)}
            className="w-full text-center py-2.5 text-[15px] font-semibold text-white bg-[#4f46e5] rounded-md hover:bg-[#3730a3] transition-colors duration-150"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;