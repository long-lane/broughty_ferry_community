import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhoWeAre } from "../components/WhoWeAre";
import { News } from "../components/News";
import { FindUs } from "../components/FindUs";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { GetInvolved } from "../components/GetInvolved";
import { FerryChats } from "../components/FerryChats";
import { YouthGaff } from "../components/YouthGaff";
export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <Routes>
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do/ferry-chats" element={<FerryChats/>} />
          <Route path="/what-we-do/youth-gaff" element={<YouthGaff/>} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/news" element={<News />} />
          <Route path="/find-us" element={<FindUs />} />          
        </Routes>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </BrowserRouter>
  );
};
