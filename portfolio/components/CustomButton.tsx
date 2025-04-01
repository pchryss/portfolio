'use client';

import React from 'react';

interface CustomButtonProps {
  divStyles: string;
  textStyles: string;
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  divStyles,
  textStyles,
  label,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={divStyles}>
      <h1 className={textStyles}>{label}</h1>
    </div>
  );
};

export default CustomButton;
