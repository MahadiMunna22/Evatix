import React from "react";

import Header from "../partials/Header";
import BodyUpper from "../partials/BodyUpper";
import BodyLower from "../partials/BodyLower";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/* Site Body */}
      <main className="flex-grow">
        <BodyUpper />
        <div className="mt-30"></div>
        <BodyLower />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
