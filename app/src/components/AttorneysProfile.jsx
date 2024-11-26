import React from "react";
import lawyer from "../assets/lawyer-portrait-2.png";
import { useTranslation } from "react-i18next";

export default function AttorneysProfile() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="w-full bg-beige text-gray-700">
      <div className="w-full w-full md:max-w-7xl grid grid-cols-2 py-32 mx-auto">
        <div>
          <img src={lawyer} className="w-96 shadow-lg mx-auto" alt="Lawyer" />
        </div>
        <div>
          <div className="text-xl md:text-3xl md:text-4xl font-serif">
            {t("attorneyProfile.name")}
          </div>
          <div className="font-serif text-xl mt-3 mb-7">
            {t("attorneyProfile.title")}
          </div>
          <div>{t("attorneyProfile.bio")}</div>
          <div className="flex space-x-12 mt-7">
            <div className="font-serif">
              <div className="text-lg">{t("attorneyProfile.experience.label")}</div>
              <div className="text-3xl">12+</div>
            </div>
            <div className="font-serif">
              <div className="text-lg">{t("attorneyProfile.cases.label")}</div>
              <div className="text-3xl">662+</div>
            </div>
            <div className="font-serif">
              <div className="text-lg">{t("attorneyProfile.clients.label")}</div>
              <div className="text-3xl">128+</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full w-full md:max-w-7xl pt-5 pb-40 mx-auto">
        <div className="grid grid-cols-2">
          <Quad
            title={t("attorneyProfile.quads.education.title")}
            description={t("attorneyProfile.quads.education.description")}
          />
          <Quad
            title={t("attorneyProfile.quads.legalExperience.title")}
            description={t("attorneyProfile.quads.legalExperience.description")}
          />
          <Quad
            title={t("attorneyProfile.quads.recognition.title")}
            description={t("attorneyProfile.quads.recognition.description")}
          />
          <Quad
            title={t("attorneyProfile.quads.community.title")}
            description={t("attorneyProfile.quads.community.description")}
          />
        </div>
      </div>
    </div>
  );
}

function Quad({ title, description }) {
  return (
    <div className="grid grid-cols-5 my-3 mx-3">
      <div className="mx-8 mt-3">
        <div className="w-full h-[0.5px] bg-gray-700"></div>
      </div>
      <div className="col-span-4">
        <div className="text-3xl font-serif">{title}</div>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
}
