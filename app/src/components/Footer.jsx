import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo_white from "../assets/logo-header-white.png";

export default function Footer() {
  const { t } = useTranslation(); // Translation hook

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Dynamically update window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full bg-crimson text-white py-20">
      <div className="w-full md:max-w-7xl mx-auto">
        <div className="flex justify-center">
          <img className="w-48" src={logo_white} alt="Logo" />
        </div>
        <div className="mx-auto my-14 w-1/2 h-[0.5px] bg-white" />
        <div
          className={`flex justify-center gap-10 ${
            window.innerWidth < 768 && "grid"
          }`}
        >
          <FooterLink href="/">{t("footer.home")}</FooterLink>
          <FooterLink href="/about">{t("footer.aboutUs")}</FooterLink>
          <FooterLink href="/attorneys">{t("footer.attorneys")}</FooterLink>
          <FooterLink href="/resources">{t("footer.resources")}</FooterLink>
          <FooterLink href="/faqs">{t("footer.faqs")}</FooterLink>
          <FooterLink href="/contact">{t("footer.contact")}</FooterLink>
        </div>
        <div className="mx-auto my-14 w-1/2 h-[0.5px] bg-white" />
        <p className="text-center">
          Copyright © 2024. {t("footer.allRightsReserved")}
        </p>
      </div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a href={href} className="text-sm hover:underline">
      {children}
    </a>
  );
}
