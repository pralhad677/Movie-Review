import React, { MouseEvent } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
