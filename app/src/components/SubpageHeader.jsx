import React from "react";
import NavBar from "./Navbar";
import { useTranslation } from "react-i18next";

export default function SubpageHeader({ title, description }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-sojb w-full bg-cover bg-center">
        <div className="backdrop-blur-sm bg-crimson/80 h-full">
          <NavBar bgColor="" light />
          <div className="text-white mx-auto px-8 md:px-16 md:pt-14 pb-20 md:pb-32 w-full md:max-w-7xl w-full relative ">
            <div className="md:grid grid-cols-3 md:divide-x-2 divide-white">
              <div className="w-full my-14 text-3xl md:text-5xl font-serif">
                {t(title)}
              </div>
              <div className="md:col-span-2">
                <div className="md:px-24 my-1 leading-7">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
