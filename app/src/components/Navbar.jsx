import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import logo from "../assets/logo-header.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar({ bgColor, light = false }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

   // Handle menu opening and closing
   const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleMenuClose();
  };

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
        
        {/* Language Dropdown */}
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={handleMenuOpen}
        >
          {t("navbar.language")}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
          <MenuItem onClick={() => changeLanguage("fr")}>Français</MenuItem>
          <MenuItem onClick={() => changeLanguage("ar")}>العربية</MenuItem>
        </Menu>
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
