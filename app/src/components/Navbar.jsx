import Button from "@mui/joy/Button";
import logo from "../assets/logo-header.png";
import { useNavigate } from "react-router-dom";

export default function NavBar({ bgColor, light = false }) {
  const navigate = useNavigate();

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
          Home
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/about")}
        >
          About Us
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/attorneys")}
        >
          Attorneys
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/resources")}
        >
          Resources
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/faqs")}
        >
          FAQs
        </Button>
        <Button
          color="neutral"
          sx={() => buttonStyle[light]}
          variant="plain"
          onClick={() => navigate("/contact")}
        >
          Contact
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
