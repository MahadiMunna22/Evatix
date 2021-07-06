import React, { useState } from "react";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative mt-16 md:mt-20 bg-gradient-to-r from-blue-150 to-blue-650 h-500px">
      {/* Upper Side */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mb-24 lg:-mb-32">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 py-10">
          {/* Left Side */}
          <div className="col-span-3 flex justify-center">
            <div className="flex flex-col">
              <div className="font-raleway text-white text-sm font-bold text-center lg:text-left tracking-wide">
                BUSINESS OVERFLOW
              </div>
              <div className="my-5 font-raleway text-white text-40 md:text-45 lg:text-50 font-bold text-center lg:text-left tracking-normal leading-43 md:leading-64 lg:leading-69">
                Get the most efficient UI design for your business now!
              </div>
              <div className="font-raleway text-white text-20 md:text-24 bold text-center lg:text-left mb-5">
                <div className="mx-auto lg:m-0 max-w-300 md:max-w-410 ">
                  Hire me to design a clean and modern UI for your product’s
                  website.
                </div>
              </div>
              <div className="flex justify-center lg:justify-start py-5">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button className="bg-white px-5 py-3 rounded text-blue cursor-pointer w-200 lg:w-100">
                    Hire me
                  </button>
                  <button className="text-white px-5 py-3 rounded border-white border-2 cursor-pointer">
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-3 flex justify-center items-center">
            <img
              width="70%"
              src={require("../images/image_02.png").default}
              alt="banner-img"
            />
          </div>
        </div>
      </div>

      {/* Lower Side */}
      <div className="w-full">
        <img src={require("../images/Shape_02.png").default} alt="shape" />
      </div>
    </section>
  );
}

export default HeroHome;
