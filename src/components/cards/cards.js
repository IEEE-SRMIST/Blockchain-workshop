import React from "react";
import img from "../../assets/images/image 4.svg";
const Cards = () => {
  return (
  <div className="bg-black">
    <div className="text-Roboto text-2xl lg:text-4xl mb-4 text-white text-center pt-20">
        <h3>Whats in it for you?</h3>
    </div>
    <div>
    <section className="bg-black min-h-screen flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-16 text-white flex-grow">
      <div className="w-[300px] h-[380px] bg-transparent cursor-pointer group perspective lg:py-0 py-8">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src={img} className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-600 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[380px] bg-transparent cursor-pointer group perspective lg:py-0 py-8">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src={img} className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-600 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[380px] bg-transparent cursor-pointer group perspective lg:py-0 py-8">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src={img} className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-600 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};
export default Cards;
