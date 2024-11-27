import React from "react";
import gavel from "../assets/gavel.png";
import { useTranslation } from "react-i18next";

export default function AboutAwards() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="flex w-full bg-beige text-white pt-32">
      <div className="mx-auto px-16 w-full md:max-w-7xl w-full relative">
        <div className="relative flex items-center">
          <div className="md:w-3/5 max-h-[500px] overflow-hidden shadow-xl">
            <img src={gavel} />
          </div>
          <div className="absolute right-0 -top-28 md:top-0 w-4/5 md:w-1/2 flex items-center translate-y-16 translate-x-10">
            <div 
            className="text-3xl md:text-6xl font-serif text-gray-700"
            dangerouslySetInnerHTML={{ __html: t("aboutAwards.title") }}
            ></div>
          </div>
        </div>
        <div className="text-gray-700 pt-16 md:pt-24 ml-auto md:w-3/5 space-y-5">
          <p>{t("aboutAwards.paragraphs.intro")}</p>
          <p>{t("aboutAwards.paragraphs.impact")}</p>
        </div>
        <div className="w-4/5 h-[1.25px] bg-gray-700 mx-auto mt-28 mb-10 shadow-xl"></div>
      </div>
    </div>
  );
}
