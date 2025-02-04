import { ArrowLeft } from "lucide-react";
import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <div className="flex items-center ml-10 mb-10">
      <ArrowLeft className="w-6 h-6 mr-20 mt-2 text-black" />
      <div className="text-3xl font-semibold">{title}</div>
    </div>
  );
}
