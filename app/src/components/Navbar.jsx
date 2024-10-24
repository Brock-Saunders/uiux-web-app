import Button from "@mui/joy/Button";
import logo from "../assets/logo-header.png";

export default function NavBar({ bgColor }) {
  return (
    <div className={`flex justify-between span p-7 px-10 shadow-lg ${bgColor}`}>
      <img className="w-64" src={logo} />
      <div className="flex gap-2 mr-5">
        <Button color="neutral" variant="plain">
          Home
        </Button>
        <Button color="neutral" variant="plain">
          About Us
        </Button>
        <Button color="neutral" variant="plain">
          Attorneys
        </Button>
        <Button color="neutral" variant="plain">
          Resources
        </Button>
        <Button color="neutral" variant="plain">
          FAQs
        </Button>
        <Button color="neutral" variant="plain">
          Contact
        </Button>
      </div>
    </div>
  );
}
