import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded transition-colors font-medium";
  const variantClasses = {
    default: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "border border-gray-300 hover:bg-gray-50 text-gray-700"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}