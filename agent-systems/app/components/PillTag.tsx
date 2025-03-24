import React from "react";

type PillTagProps = {
  label: string;
  variant?: "primary" | "secondary";
};

export default function PillTag({ label, variant = "primary" }: PillTagProps) {
  const getStyles = () => {
    if (variant === "secondary") {
      return "bg-teal-500/20 text-teal-400";
    }
    return "bg-gray-800 text-white";
  };

  return (
    <div
      className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${getStyles()}`}
    >
      {label}
    </div>
  );
}
