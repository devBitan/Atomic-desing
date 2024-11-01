"use client";
import React from 'react';


type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode; 
  icon?: React.ReactNode; 
  bgColorHover?: string;
  bgColor?: string; 
  textColorIcon?: string; 
  textColor?: string; 
  hoverColorIcon?: string;
  textHoverColorIcon?: string;
  width?: string | number; 
  borderRadius?: string | number;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  onClick,
  children,
  icon,
  bgColor,
  textColor,
  textColorIcon,
  textHoverColorIcon,
  bgColorHover,
  width,
  borderRadius 
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      // bgColor={bgColor}
      // textColor={textColor}
      // bgColorHover={bgColorHover}
      // width={width} 
      // borderRadius={borderRadius}  
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
