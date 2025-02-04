import React from "react";

interface InputBoxProps {
  type: string;
  placeholder: string;
}

export default function InputBox({ type, placeholder }: InputBoxProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-2xl p-3 w-full mb-4 bg-[#F0F0F0]"
    />
  );
}
