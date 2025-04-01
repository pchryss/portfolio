'use client';

import React from 'react';
import ScrollButton from './ScrollButton';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <div className="bg-sky-100 h-25 fixed top-0 w-full z-50 flex justify-center gap-7 items-center">
      <div>
        <h1 className="text-3xl">Philip Chryssochoos</h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        <ScrollButton text="Personal Info" scrollTo="#info" />
        <ScrollButton text="Experience" scrollTo="#work" />
        <ScrollButton text="Projects" scrollTo="#projects" />
      </div>
      <div>
        <CustomButton
          divStyles={
            'h-20 w-40 flex justify-center items-center border-6 rounded-3xl hover:opacity-40'
          }
          textStyles={'text-black'}
          label="Resume"
          onClick={() => window.open('./resume.pdf', '_blank')}
        />
      </div>
    </div>
  );
};

export default Navbar;
