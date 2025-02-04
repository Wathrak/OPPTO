"use client";
import React, { useState, ChangeEvent } from "react";
import { Search } from "lucide-react";

interface SearchBoxProps {
  onSearch?: (query: string) => void;
}

export default function Searchbox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="flex items-center p-4 border bg-white rounded-[40px] shadow-sm max-w-md mx-auto">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search opportunities"
        value={query}
        onChange={handleSearch}
        className="ml-2 w-full bg-transparent outline-none"
      />
    </div>
  );
}
