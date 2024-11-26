import React from "react";
import SubpageHeader from "../components/SubpageHeader";
import ResourcesServices from "../components/ResourcesServices";
import ResourcesPublic from "../components/ResourcesPublic";
import GetStartedBanner from "../components/GetStartedBanner";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";


export default function Resources() {
  const { t } = useTranslation();
  return (
    <div>
      <SubpageHeader
        title={t("resources.header.title")}
        description={t("resources.header.description")}
      />
      <ResourcesServices />
      <ResourcesPublic />
      <GetStartedBanner />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
