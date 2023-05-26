import React, { useEffect } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Nav = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};
