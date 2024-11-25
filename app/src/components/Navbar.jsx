import { useTranslation } from "react-i18next";
import Button from "@mui/joy/Button";
import logo from "../assets/logo-header.png";
import { useNavigate } from "react-router-dom";

export default function NavBar({ bgColor, light = false }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={`flex justify-between span p-7 px-10 ${bgColor}`}>
      <img className="w-64" src={logo} />
      <div className="flex gap-2 mr-5">
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/")}
        >
          {t("navbar.home")}
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/about")}
        >
          {t("navbar.aboutUs")}
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/attorneys")}
        >
          {t("navbar.attorneys")}
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/resources")}
        >
          {t("navbar.resources")}
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/faqs")}
        >
          {t("navbar.faqs")}
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/contact")}
        >
          {t("navbar.contact")}
        </Button>
      </div>
    </div>
  );
}

const buttonStyle = {
  false: {
    color: "#463649",
  },
  true: {
    borderRadius: "md",
    fontWeight: "lg",
    color: "#fff",
    "&:hover": {
      color: "#463649",
      background: "rgba(255, 255, 255, 0.05)",
    },
  },
};
