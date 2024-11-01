"use client";
import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  size?: 'xsmall' | 'small' | 'medium' | 'large'; 
  className?: string; 
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'medium',
  className,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default Paragraph;
