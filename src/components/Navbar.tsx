'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">₹</span>
            <span className="text-xl font-bold">LoanCalc India</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/home-loan" className="hover:text-blue-200 transition">Home Loan</Link>
            <Link href="/personal-loan" className="hover:text-blue-200 transition">Personal Loan</Link>
            <Link href="/car-loan" className="hover:text-blue-200 transition">Car Loan</Link>
            <Link href="/education-loan" className="hover:text-blue-200 transition">Education</Link>
            <Link href="/compare" className="bg-white text-blue-700 font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-50 transition">Compare Banks</Link>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-sm">
            <Link href="/home-loan" onClick={() => setOpen(false)}>Home Loan</Link>
            <Link href="/personal-loan" onClick={() => setOpen(false)}>Personal Loan</Link>
            <Link href="/car-loan" onClick={() => setOpen(false)}>Car Loan</Link>
            <Link href="/education-loan" onClick={() => setOpen(false)}>Education Loan</Link>
            <Link href="/gold-loan" onClick={() => setOpen(false)}>Gold Loan</Link>
            <Link href="/compare" onClick={() => setOpen(false)}>Compare Banks</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
