import React from "react";
import { Home, Globe, Search, User, Users } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed py-6 mx-4 bottom-6 left-0 right-0 bg-[#00B2F3] flex justify-around items-center rounded-[30px] shadow-lg">
      <button className="text-black">
        <Link href="/">
          <Home size={24} />
        </Link>
      </button>
      <button className="text-white">
        <Link href="/opportunity">
          <Globe size={24} />
        </Link>
      </button>
      <button className="text-white">
        <Search size={24} />
      </button>
      <button className="text-white">
        <Users size={24} />
      </button>
      <button className="text-white">
        <User size={24} />
      </button>
    </div>
  );
}
