import React from "react";
import scales from "../assets/scales-of-justice.png";
import { useTranslation } from "react-i18next";

export default function HomeHeadBanner() {

  const { t } = useTranslation();

  return (
    <div className="flex w-full bg-beige text-white pt-14 pb-24">
      <div className="mx-auto px-16 max-w-7xl w-full relative">
        <div className="relative">
          <div className="w-4/5 ml-auto max-h-[500px] overflow-hidden shadow-xl">
            <img src={scales} />
          </div>
          <div className="absolute inset-0 flex items-center w-1/2 -translate-y-12">
            <div className="text-6xl font-serif text-gray-700">
            {t("homeBanner.tagline")}{" "}
            <a className="text-gold">{t("homeBanner.laassel")}</a>{" "}
            {t("homeBanner.taglineEnd")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
