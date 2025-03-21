import React from 'react';

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function CTAButton({ 
  text, 
  href, 
  variant = 'primary', 
  size = 'medium',
  className = ''
}: CTAButtonProps) {
  
  // Basisklassen für alle Button-Varianten
  const baseClasses = "font-bold rounded-full transition-all duration-300 inline-block text-center";
  
  // Größen-Klassen
  const sizeClasses = {
    small: "py-2 px-6 text-sm",
    medium: "py-3 px-8 text-base",
    large: "py-4 px-10 text-lg"
  };
  
  // Varianten-Klassen
  const variantClasses = {
    primary: "bg-teal-500 border-2 border-teal-500 text-black hover:bg-teal-600 hover:border-teal-600",
    secondary: "bg-black text-white border-2 border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105",
    outline: "bg-transparent text-white border-2 border-cyan-500 hover:bg-cyan-900/20",
    gradient: "bg-gradient-to-r from-blue-600 to-teal-600 hover:from-teal-600 hover:to-blue-600 text-white"
  };
  
  // Kombinieren der Klassen basierend auf den Props
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <a 
      href={href} 
      className={buttonClasses}
    >
      {text}
    </a>
  );
} 