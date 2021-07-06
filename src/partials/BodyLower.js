import React, { useState } from "react";

function Features() {
  const [packages, setPackages] = useState([
    {
      header1: "GETTING STARTED",
      header2: "Singularity",
      body: "This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…",
      buttonText: "SEE MORE",
    },
    {
      header1: "BUSINESS WORKFLOW",
      header2: "Plurality",
      body: "This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…",
      buttonText: "SEE MORE",
    },
    {
      header1: "INTERACTIONS",
      header2: "Professional",
      body: "This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…",
      buttonText: "SEE MORE",
    },
  ]);

  return (
    <section className="relative lg:pb-24">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-2 md:pt-5">
          {/* Section header */}
          <div className="max-w-min mx-auto text-center pb-5 md:pb-16">
            <h1 className="px-2 pb-2 font-bold font-raleway text-40 border-b-2 border-blue-660">
              Packages
            </h1>
          </div>

          {/* Section containing cards */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-10 mx-10">
            {packages.map((packageData, index) => {
              return (
                <div key={index} className="shadow-card p-5 rounded-lg">
                  <div>
                    <div className="font-raleway text-blue-660 font-medium text-10">
                      {packageData.header1}
                    </div>
                    <div className="font-raleway font-semibold text-20 my-1">
                      {packageData.header2}
                    </div>
                    <div className="font-raleway text-12">
                      {packageData.body}
                    </div>
                    <button className="bg-gradient-to-r from-blue-150 to-blue-650 px-2 py-1 mt-3 rounded text-white text-10 font-medium">
                      {packageData.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
