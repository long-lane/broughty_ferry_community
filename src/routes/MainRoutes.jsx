import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhoWeAre } from "../components/WhoWeAre";
import { News } from "../components/News";
import { FindUs } from "../components/FindUs";
import { Nav } from "../components/Nav";
import { FerryChats } from "../components/FerryChats";
import { YouthGaff } from "../components/YouthGaff";
export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/ferry-chats" element={<FerryChats />} />
          <Route path="/youth-gaff" element={<YouthGaff />} />

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
