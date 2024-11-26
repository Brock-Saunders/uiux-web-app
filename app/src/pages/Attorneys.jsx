import React from "react";
import SubpageHeader from "../components/SubpageHeader";
import AttorneysProfile from "../components/AttorneysProfile";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Attorneys() {
  const { t } = useTranslation();
  return (
    <div>
      <SubpageHeader
        title={t("attorneys.header.title")}
        description={t("attorneys.header.description")}
      />
      <AttorneysProfile />
      <Footer />
    </div>
  );
}
