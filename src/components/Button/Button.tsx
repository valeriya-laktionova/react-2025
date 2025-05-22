import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  variant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, variant = 'default', ...props }) => {
  return (
    <button className={`btn ${variant}`} {...props}>
      {children}
    </button>
  );
};
