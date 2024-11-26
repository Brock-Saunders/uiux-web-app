import React, { useState } from "react";
import Button from "@mui/joy/Button";
import logo from "../assets/logo-header.png";
import logo_white from "../assets/logo-header-white-full.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({ bgColor, light = false }) {
  return (
    <div className={`flex justify-between span p-7 px-10 ${bgColor}`}>
      <img className="w-64" src={light ? logo_white : logo} />
      <div className="">
        <TemporaryDrawer light={light} />
      </div>
    </div>
  );
}

function TemporaryDrawer({ light }) {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleMenuClose();
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      bgColor="#E8E9E1"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <div className="mt-7 my-3 mx-5 font-semibold">Page</div>
        {[
          ["Home", "/"],
          ["About Us", "/about"],
          ["Attorneys", "/attorneys"],
          ["Resources", "/resources"],
          ["FAQs", "/faqs"],
          ["Contact", "/contact"],
        ].map((text, index) => (
          <ListItem key={text[0]} disablePadding>
            <div
              className="pl-2 my-3 mx-5"
              onClick={() => {
                navigate(text[1]);
                toggleDrawer(false);
              }}
            >
              {text[0]}
            </div>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div className="my-3 mx-5 font-semibold">Language</div>

        {[
          ["English", "en"],
          ["Español", "es"],
          ["Français", "fr"],
          ["العربية", "ar"],
        ].map((text, index) => (
          <ListItem key={text[0]} disablePadding>
            <div
              className="pl-2 my-3 mx-5"
              onClick={() => changeLanguage(text[1])}
            >
              {text[0]}
            </div>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon
        sx={{ color: light ? "#fff" : "#374151", fontSize: 32 }}
        onClick={toggleDrawer(true)}
      />
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
