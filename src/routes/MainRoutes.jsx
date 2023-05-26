import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhoWeAre } from "../components/WhoWeAre";
import { News } from "../components/News";
import { FindUs } from "../components/FindUs";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { GetInvolved } from "../components/GetInvolved";

import { WhatWeDo } from "../components/WhatWeDo";
export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <header className="">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Hero />
                <WhoWeAre />
              </>
            }
          />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do/" element={<WhatWeDo />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/news" element={<News />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="*" to="/" />
        </Routes>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </BrowserRouter>
  );
};