import React from "react";
import lawyer_portrait from "../assets/lawyer-portrait.png";
import { useTranslation } from "react-i18next";

export default function HomeLawyerProfile() {
  const { t } = useTranslation();

  return (
    <div className="flex w-full bg-beige text-gray-700 pt-20 pb-32">
      <div className="mx-auto px-16 max-w-7xl w-full relative ">
        <div className="md:grid grid-cols-3 md:divide-x-2 divide-crimson">
          <div className="hidden md:block w-full my-14">
            <img
              className="rounded-full w-52 mx-auto shadow-xl"
              src={lawyer_portrait}
            />
          </div>
          <div className="col-span-2">
            <div className="md:px-24 md:my-24 text-3xl md:text-5xl font-serif">
              {t("homeLawyerProfile.heading")}
            </div>
          </div>
        </div>
        <div className="md:mr-24 md:ml-24 mt-14 md:mt-24 ml-auto text-justify space-y-5">
          <p>{t("homeLawyerProfile.paragraphs.personalInjury")}</p>
          <p>{t("homeLawyerProfile.paragraphs.immigrationHelp")}</p>
        </div>
      </div>
    </div>
  );
}
