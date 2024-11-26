import React, { useState } from "react";
import gavel from "../assets/gavel-2.png";
import ListRow from "./ListRow";
import { useTranslation } from "react-i18next";

export default function ResourcesServices() {
  const { t } = useTranslation(); // Hook for translations

  // Mock translation data (replace with actual translations from i18n)
  const servicesData = t("resourcesServices.services", { returnObjects: true });
  const headerTitle = t("resourcesServices.header.title");

  return (
    <div className="w-full bg-beige">
      <div className="px-16 w-full md:max-w-7xl relative pt-32 mx-auto">
        <div className="relative flex items-center">
          <div className="md:w-3/5 mt-32 md:mt-0 max-h-[500px] overflow-hidden shadow-xl">
            <img src={gavel} alt="Gavel" />
          </div>
          <div className="absolute right-0 -top-[136px] md:top-0 md:w-1/2 flex items-center translate-y-16 translate-x-10">
            <div className="text-4xl md:text-6xl font-serif text-gray-700">
              {headerTitle}
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-16 md:pt-32">
          <div className="md:grid grid-cols-2 gap-x-24 mx-auto w-4/5">
            {Object.entries(servicesData).map(([key, service]) => (
              <ServiceRow
                key={key}
                service={service.name}
                description={service.description}
              />
            ))}
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
