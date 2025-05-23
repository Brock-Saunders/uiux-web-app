import React from "react";
import scales from "../assets/scales-of-justice.png";
import { useTranslation } from "react-i18next";

export default function HomeHeadBanner() {
  const { t } = useTranslation();

  return (
    <div className="flex w-full bg-beige text-white pt-32 md:pt-14 pb-24">
      <div className="mx-auto px-5 md:px-16 w-full md:max-w-7xl w-full relative">
        <div className="relative">
          <div className="w-4/5 ml-auto max-h-[500px] overflow-hidden shadow-xl">
            <img src={scales} alt="Scales of Justice" />
          </div>
          <div className="absolute -top-16 inset-0 flex items-center w-1/2 -translate-y-12">
            <div
              className="text-4xl md:text-6xl font-serif text-gray-700"
              dangerouslySetInnerHTML={{ __html: t("homeBanner") }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
