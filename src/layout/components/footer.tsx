import { footerLinks } from "@/constants/data";
import React, { useState } from "react";
import logo from "@/assets/images/vercel.png";
import { FaComputer } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

const Footer: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState("system");

  const themes = [
    { id: "system", icon: FaComputer, label: "System" },
    { id: "light", icon: MdLightMode, label: "Light" },
    { id: "dark", icon: LuMoonStar, label: "Dark" },
  ];
  return (
    <footer className="font-Geist bg-black text-[rgb(161,161,161)] px-8 pb-16">
      <div className="max-w-6xl mx-auto px-10">
        <div className=" grid grid-cols-1 justify-between md:grid-cols-5 gap-12">
          {/* Render first four columns from footerLinks */}
          {footerLinks.map((category) => (
            <div key={category.category}>
              <h3 className="text-[rgb(220,220,220)] text-sm font-medium mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name} className="font-light text-sm">
                      <a
                        href={link.path}
                        className="flex items-center hover:text-white"
                      >
                        {link.icon && link.iconPosition === "left" && Icon && (
                          <Icon className="mr-2 w-4 h-4" />
                        )}
                        <span>{link.name}</span>
                        {link.icon && link.iconPosition === "right" && Icon && (
                          <Icon className="ml-2 w-4 h-4" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {/* Fifth column: Logo */}
          <div className="flex flex-col items-end justify-start">
            {/* Replace with your logo image */}
            <img src={logo} alt="Logo" className="w-5 h-auto" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 ">
          <div className="flex items-center gap-2 rounded-lg p-2.5 -ml-2.5 hover:bg-[rgb(20,20,20)] cursor-pointer transition-all duration-150 ease-in-out">
            <div className="size-2 rounded-full bg-blue-600" />
            <p className="text-blue-600 text-sm">All systems normal</p>
          </div>

          <div className="flex border border-[var(--border)] rounded-full ">
            {themes.map((theme) => {
              const Icon = theme.icon;
              const isActive = activeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={` ${
                    isActive
                      ? " text-[rgb(237,237,237)] border border-[var(--border)] rounded-full p-2"
                      : "p-2"
                  }`}
                  aria-label={theme.label}
                >
                  <Icon size={15} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
