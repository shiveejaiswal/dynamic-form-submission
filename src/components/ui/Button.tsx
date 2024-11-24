    // src/components/FormGenerator/UI/Button.tsx

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
