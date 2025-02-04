import React from "react";

export default function Header() {
  return (
    <div className="bg-blue-600 text-white py-4 px-6 md:px-12 lg:px-24 overflow-clip">
      <nav className="flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Scholar
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/opportunity" className="hover:underline">
              Opportunities
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:underline">
              My Profile
            </a>
          </li>
          <li>
            <a href="/login" className="hover:underline">
              Login
            </a>
          </li>
          <li>
            <a href="/signup" className="hover:underline">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
