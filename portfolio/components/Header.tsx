import React from 'react';
import NasaAPOD from './NasaAPOD';

const Header = () => {
  return (
    <div className="flex p-4 gap-5 flex-wrap">
      <div>
        <div className="flex flex-col gap-2 max-w-2xl text-white">
          <h1 className="text-4xl">Hello, I'm Philip!</h1>
          <h2>
            I'm currently studying computer science at the Georgia Institute of
            Technology. Additionally, I'm working as a backend dev with the
            Yellow Jacket Space Program and an active member of the Georgia Tech
            Astronomy Club!
          </h2>
          <h2>
            Some of my hobbies include running, hiking, stargazing, and
            skateboarding
          </h2>
        </div>
      </div>
      <NasaAPOD />
    </div>
  );
};

export default Header;
