import React from "react";
import { useTranslation } from "react-i18next";
import logo_white from "../assets/logo-header-white.png";

export default function Footer() {
  const { t } = useTranslation(); // Translation hook

  return (
    <div className="flex w-full bg-crimson text-white py-20">
      <div className="w-full md:max-w-7xl w-full mx-auto">
        <div className="flex justify-center">
          <img className="w-48" src={logo_white} alt="Logo" />
        </div>
        <div className="mx-auto my-14 w-1/2 h-[0.5px] bg-white" />
        <div className="flex justify-center gap-10">
          <FooterLink href="/">{t("navbar.home")}</FooterLink>
          <FooterLink href="/about">{t("navbar.aboutUs")}</FooterLink>
          <FooterLink href="/attorneys">{t("navbar.attorneys")}</FooterLink>
          <FooterLink href="/resources">{t("navbar.resources")}</FooterLink>
          <FooterLink href="/faqs">{t("navbar.faqs")}</FooterLink>
          <FooterLink href="/contact">{t("navbar.contact")}</FooterLink>
        </div>
        <div className="mx-auto my-14 w-1/2 h-[0.5px] bg-white" />
        <p className="text-center">
          Copyright © 2024. All Rights Reserved
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
