import React from "react";
import ContactForm from "../components/ContactForm";
import SubpageHeader from "../components/SubpageHeader";
import Footer from "../components/Footer";
import ContactInformationRow from "../components/ContactInformationRow";
import { useTranslation } from "react-i18next";


export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <SubpageHeader
        title={t("contact.header.title")}
        description={t("contact.header.description")}
      />
      <ContactForm />
      <ContactInformationRow />
      <Footer />
    </div>
  );
}
