import React, { useState } from "react";
import gavel from "../assets/gavel-2.png";
import ListRow from "./ListRow";
import { useTranslation } from "react-i18next";

export default function ResourcesServices() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="w-full bg-beige">
      <div className="px-16 w-full md:max-w-7xl w-full relative pt-32 mx-auto">
        <div className="relative flex items-center">
          <div className="w-3/5 max-h-[500px] overflow-hidden shadow-xl">
            <img src={gavel} alt="Gavel" />
          </div>
          <div className="absolute right-0 top-0 w-1/2 flex items-center translate-y-16 translate-x-10">
            <div className="text-6xl font-serif text-gray-700">
              {t("resourcesServices.header.title")}
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-32">
          <div className="grid grid-cols-2 gap-x-24 mx-auto w-4/5">
            <ServiceRow
              service={t("resourcesServices.services.immigration.name")}
              description={t("resourcesServices.services.immigration.description")}
            />
            <ServiceRow
              service={t("resourcesServices.services.personalInjury.name")}
              description={t("resourcesServices.services.personalInjury.description")}
            />
            <ServiceRow
              service={t("resourcesServices.services.autoAccidents.name")}
              description={t("resourcesServices.services.autoAccidents.description")}
            />
            <ServiceRow
              service={t("resourcesServices.services.premisesLiability.name")}
              description={t("resourcesServices.services.premisesLiability.description")}
            />
            <ServiceRow
              service={t("resourcesServices.services.wrongfulDeath.name")}
              description={t("resourcesServices.services.wrongfulDeath.description")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({ service, description, border = true }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <ListRow question={service} anwser={isOpen ? description : ""} />
      </div>
      {isOpen && (
        <div
          className="pt-4 text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}
      {border && <div className="my-7 w-full h-[0.5px] bg-gray-700"></div>}
    </div>
  );
}
