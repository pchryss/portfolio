import React from 'react';
import NavbarButton from './NavbarButton';

const Navbar = () => {
  return (
    <div className="bg-sky-100 h-25 fixed top-0 w-full z-50 flex justify-center gap-7 items-center">
      <NavbarButton text="Personal Info" scrollTo="#info" />
      <NavbarButton text="Work Experience" scrollTo="#work" />
      <NavbarButton text="Projects" scrollTo="#projects" />
    </div>
  );
};

export default Navbar;
