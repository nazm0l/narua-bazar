"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/10 p-4 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center text-xl relative">
        <Link href="/" className="text-primary text-2xl font-bold">
          নারুয়া বাজার
        </Link>

        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link href="/" className="text-black hover:underline">
              হোম
            </Link>
          </li>
          <li>
            <Link href="/shops" className="text-black hover:underline">
              দোকান সমূহ
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-black hover:underline">
              সংবাদ
            </Link>
          </li>
          <li>
            <Link href="/information" className="text-black hover:underline">
              তথ্য
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:underline">
              যোগাযোগ
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                // Close icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-13 left-0 w-full p-4 bg-white/90 shadow-lg backdrop-blur-sm lg:hidden">
            <ul className="space-y-2 text-center">
              <li>
                <Link
                  href="/"
                  className="block text-black hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/shops"
                  className="block text-black hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  দোকান সমূহ
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="block text-black hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  সংবাদ
                </Link>
              </li>
              <li>
                <Link
                  href="/information"
                  className="block text-black hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  তথ্য
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-black hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
