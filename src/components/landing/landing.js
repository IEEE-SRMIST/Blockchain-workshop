import React from 'react';
import gif from '../../assets/gif/blockchain1.gif';

function App() {
  return (
    <div className="flex bg-black h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <img src={gif} alt="gif" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center text-white">
        <h1 className="text-Roboto text-6xl mb-4 text-right">
          Lorem Ipsum
        </h1>
        <div className="text-right px-20">
          <p className="text-lexand pt-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-lexand pt-12">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum, SRM KTR
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
