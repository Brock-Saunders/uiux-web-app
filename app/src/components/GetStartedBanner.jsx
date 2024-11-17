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
        Following an accident, you should always consult with an experienced 
        personal injury attorney as soon as possible. An experienced personal 
        injury attorney will help you negotiate with insurance companies and 
        ensure that you receive the full amount of compensation you deserve for 
        your losses.  Any delay in discussing your case with an experienced 
        attorney may result in the loss or destruction of critical evidence and 
        possibly jeopardize your ability to be compensated. 
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
