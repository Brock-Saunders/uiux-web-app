import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

export default function GetStartedBanner() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full bg-crimson text-white py-24">
      <div className="max-w-7xl w-full mx-auto space-y-10">
        <div className="text-4xl text-center font-serif">
          We Help You With Quality Legal Lawyer
        </div>
        <p className="text-center max-w-4xl mx-auto">
          Labore anim in eu cillum cillum ex aliqua. Labore pariatur enim cillum
          cupidatat dolore irure est. Incididunt cupidatat cupidatat ipsum
          eiusmod in esse consequat amet minim. Anim nisi quis pariatur culpa
          consectetur consectetur duis esse proident anim nulla dolor commodo.
          Commodo tempor reprehenderit exercitation qui velit dolore tempor sit.
        </p>
        <div className="flex justify-center">
          <Button
            color="neutral"
            variant="soft"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
