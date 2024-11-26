import React from "react";
import SubpageHeader from "../components/SubpageHeader";
import FAQList from "../components/FAQList";
import GetStartedBanner from "../components/GetStartedBanner";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Faqs() {
  const { t } = useTranslation();
  return (
    <div>
      <SubpageHeader
        title={t("faqs.header.title")}
        description={t("faqs.header.description")}
      />
      <FAQList />
      <GetStartedBanner />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
