import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhoWeAre } from "../components/WhoWeAre";
import { News } from "../components/News";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { GetInvolved } from "../components/GetInvolved";
import { FerryChats } from "../components/FerryChats";
import { YouthGaff } from "../components/YouthGaff";
import { Footer } from "../components/Footer";
export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <header className="">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/broughty_ferry_community/"
            element={
              <>
                <Hero />
                <WhoWeAre />
                <FerryChats props={{ showBtn: true, showMap: false, showMeetings : false }} />
              </>
            }
          />
          <Route
            path="/broughty_ferry_community/who-we-are"
            element={<WhoWeAre />}
          />
          <Route
            path="/broughty_ferry_community/what-we-do/ferry-chats"
            element={<FerryChats props={{ showBtn: false, showMap: true, showMeetings : true }} />}
          />
          <Route
            path="/broughty_ferry_community/what-we-do/youth-gaff"
            element={<YouthGaff />}
          />

          <Route
            path="/broughty_ferry_community/get-involved"
            element={<GetInvolved />}
          />
          <Route path="/broughty_ferry_community/news" element={<News />} />

          <Route path="*" to="/broughty_ferry_community/" />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};
