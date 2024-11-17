import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./i18n.js";

import "./index.css";
import "@fontsource/inter";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Attorneys from "./pages/Attorneys.jsx";
import FAQs from "./pages/FAQs.jsx";
import Resources from "./pages/Resources.jsx";
import { I18nextProvider } from "react-i18next";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/attorneys", element: <Attorneys /> },
  { path: "/faqs", element: <FAQs /> },
  { path: "/resources", element: <Resources /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
