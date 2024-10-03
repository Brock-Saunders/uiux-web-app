import Button from "@mui/joy/Button";
import logo from "../assets/logo-header.png";

export default function NavBar() {
  return (
    <div className="flex justify-between span p-5 shadow-lg">
      <img className="w-64" src={logo} />
      <div className="flex gap-2 mr-5">
        <Button variant="plain">Home</Button>
        <Button variant="plain">About Us</Button>
        <Button variant="plain">Attorneys</Button>
        <Button variant="plain">Resources</Button>
        <Button variant="plain">FAQs</Button>
        <Button variant="plain">Contact</Button>
      </div>
    </div>
  );
}
