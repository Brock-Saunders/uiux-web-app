import React from "react";
import soj from "../assets/scales-of-justice-silver.png";
import { useTranslation } from "react-i18next";

export default function AboutCompany() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full bg-beige text-gray-700 pt-32 pb-32">
      <div className="mx-auto px-16 w-full md:max-w-7xl w-full relative">
        <div className="grid grid-cols-2 divide-x-2 divide-gray-700">
          <div className="px-24 my-32 text-3xl md:text-5xl font-serif">
            {t("aboutCompany.header")}
          </div>
          <div className="w-full my-14">
            <img className="w-96 mx-auto shadow-xl" src={soj} />
          </div>
        </div>
        <div className="mr-24 ml-24 mt-14 ml-auto text-justify space-y-5 w-full max-w-4xl">
          <p>{t("aboutCompany.paragraphs.one")}</p>
          <p>{t("aboutCompany.paragraphs.two")}</p>
          <p>{t("aboutCompany.paragraphs.three")}</p>
        </div>
      </div>
    </div>
  );
}
