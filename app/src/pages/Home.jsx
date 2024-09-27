import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
      <div>
        <img className="w-32 m-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/UCF_Knights_logo.svg/1274px-UCF_Knights_logo.svg.png" />
        <h1 className="text-3xl font-bold underline text-purple-500">Home</h1>
        <p className="text-blue-800 font-bold cursor-pointer" onClick={() => navigate("/about")}>About</p>
        <p className="text-blue-800 font-bold cursor-pointer" onClick={() => navigate("/contact")}>Contact</p>
      </div>
    );
  }