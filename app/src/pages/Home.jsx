import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const navigate = useNavigate();
    const { t } = useTranslation();
 
    return (
      <div>
        <Navbar />
        <img className="w-32 m-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/UCF_Knights_logo.svg/1274px-UCF_Knights_logo.svg.png" />
        <h1 className="text-3xl font-bold underline text-purple-500">Home</h1>
        <p className="text-blue-800 font-bold cursor-pointer" onClick={() => navigate("/about")}>About</p>
        <p className="text-blue-800 font-bold cursor-pointer" onClick={() => navigate("/contact")}>Contact</p>
        <p>{t("welcome")}</p>
        <Footer />
      </div>
    );
  }