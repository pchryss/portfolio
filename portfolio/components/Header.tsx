import React from 'react';
import NasaAPOD from './NasaAPOD';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <div id="info" className="flex p-4 gap-5 flex-wrap items-center">
      <div>
        <div className="flex flex-col gap-5 max-w-xl text-white">
          <h1 className="text-4xl">Hello, I'm Philip!</h1>
          <h2>
            I'm currently studying computer science at the Georgia Institute of
            Technology. Additionally, I'm working as a backend dev with the
            Yellow Jacket Space Program and an active member of the Georgia Tech
            Astronomy Club!
          </h2>
          <div className="flex gap-3">
            <a href="https://github.com/pchryss" target="_blank">
              <Github color="#ffffff" size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/philipchryssochoos/"
              target="_blank"
            >
              <Linkedin color="#ffffff" size={50} />
            </a>
            <a href="mailto:philipchryssochoos.work@gmail.com" target="_blank">
              <Mail color="#ffffff" size={50} />
            </a>
          </div>
        </div>
      </div>
      <NasaAPOD />
    </div>
  );
};

export default Header;
