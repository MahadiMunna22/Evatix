import React from "react";
import footerImg from "../images/Shape_05@2x.png";

function Footer() {
  return (
    <section>
      {/* Setting background image */}
      <div
        className="w-full mx-auto relative bg-cover bg-no-repeat bg-right-top"
        style={{
          backgroundImage: `url(${footerImg})`,
        }}
      >
        <div className="pt-16 flex justify-center ">
          {/* Footer contents */}
          <div className=" max-w-3/4 flex justify-center items-center flex-col">
            <div className="font-raleway font-bold text-white text-30 border-b p-3 text-center">
              Start a project with me
            </div>
            <div className="font-raleway text-white text-16 py-5 max-w-410 text-center leading-5">
              let’s discuss our ideas for presenting your business to the world
              in an attractive, efficient and effective way.
            </div>

            <div className="shadow-lg bg-white py-2 px-10 mt-5 mb-10 text-12 text-blue-900 rounded ">
              HIRE ME
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
