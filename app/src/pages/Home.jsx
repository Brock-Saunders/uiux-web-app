import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetStartedBanner from "../components/GetStartedBanner";
import ClientTestimonials from "../components/ClientTestimonials";
import HomeHeadBanner from "../components/HomeHeadBanner";
import ResourcesServices from "../components/ResourcesServices";
import HomeLawyerProfile from "../components/HomeLawyerProfile";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <Navbar bgColor="bg-gradient-to-b from-neutral-200 to-beige shadow-none" />
      <HomeHeadBanner />
      <HomeLawyerProfile/>
      <ResourcesServices />
      {/* HERE IS AN EXAMPLE OF USING TRANSLATION <p>{t("welcome")}</p> */}
      <GetStartedBanner />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
