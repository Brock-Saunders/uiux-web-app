import React from "react";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function GetStartedBanner() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex w-full bg-crimson text-white py-24">
      <div className="max-w-7xl w-full mx-auto space-y-10">
        <div className="text-4xl text-center font-serif">
          {t("GetStartedBanner.Header")}
        </div>
        <p className="text-center max-w-4xl mx-auto">
           {t("GetStartedBanner.Text_Block")}
        </p>
        <div className="flex justify-center">
          <Button
            color="neutral"
            variant="soft"
            onClick={() => navigate("/contact")}
          >
            {t("GetStartedBanner.Button")}
          </Button>
        </div>
      </div>
    </div>
  );
}
