import React from "react";
import { mobileNavigate } from "../contants/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigate = () => {
  return (
    <section className="lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigate.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigate"}
              to={nav.href}
              className={({ isActive }) =>
                `px-4 flex h-full item-center flex-col justify-center ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigate;
