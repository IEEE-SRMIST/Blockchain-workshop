import React from 'react';
import gif from '../../assets/gif/blockchain1.gif';

function App() {
  return (
    <div className="flex flex-col lg:flex-row bg-black h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img src={gif} alt="gif" className="max-w-full h-auto lg:h-full" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-white px-4 lg:px-12 xl:px-24">
        <div className="text-center lg:text-right">
          <h1 className="text-Roboto text-3xl lg:text-6xl mb-4">
            Lorem Ipsum
          </h1>
          <p className="text-lexand mb-8 lg:mb-12 xl:mb-16 pt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <p className="text-lexand mb-8 lg:mb-12 xl:mb-16 text-right">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum, SRM KTR
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
