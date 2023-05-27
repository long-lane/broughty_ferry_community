import React, { useEffect, useReducer } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { NavReducer } from "../reducers/Reducers";

export const Nav = () => {
  const [currentDevice, dispatch] = useReducer(NavReducer, {
    device: window.matchMedia("(min-device-width: 1024px)").matches
      ? "Desktop"
      : "Mobile",
  });

  const deviceType = () => {
    const payload = {
      device: window.matchMedia("(min-device-width: 1024px)").matches
        ? "Desktop"
        : "Mobile",
    };
    const action = { type: "navDisplay", payload: payload };
    dispatch(action);
  };

  useEffect(() => {
    window.addEventListener("resize", deviceType);
  });

  return (
    <>{currentDevice.device === "Desktop" ? <DesktopNav /> : <MobileNav />}</>
  );
};
