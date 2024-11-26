import React from "react";
import SubpageHeader from "../components/SubpageHeader";
import Footer from "../components/Footer";
import ClientTestimonials from "../components/ClientTestimonials";
import ResourcesServices from "../components/ResourcesServices";
import GetStartedBanner from "../components/GetStartedBanner";
import AboutCompany from "../components/AboutCompany";
import AboutAwards from "../components/AboutAwards";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation(); 
  return (
    <div>
      <SubpageHeader
        title={t("about.header.title")}
        description={t("about.header.description")}
      />
      <ResourcesServices />
      <AboutCompany />
      <GetStartedBanner />
      <AboutAwards />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
