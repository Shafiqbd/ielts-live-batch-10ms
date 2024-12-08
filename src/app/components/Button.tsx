"use client";
import React from "react";

interface props {
  type?: "button" | "submit" | "reset";
  onClick?: (value: any) => void;
  children: React.ReactNode;
  className?: string;
}
export default function Button({ type, onClick, children, className }: props) {
  return (
    <button
      type={type}
      className={`bg-[#1CAB55] hover:bg-[#138f45] text-white py-2 px-4 rounded-md font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
