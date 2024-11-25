import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

export default function GetStartedBanner() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full bg-crimson text-white py-24">
      <div className="max-w-7xl w-full mx-auto space-y-10">
        <div className="text-4xl text-center font-serif">
          We Provide Expert Legal Representation
        </div>
        <p className="text-center max-w-4xl mx-auto">
          After an accident, consulting a knowledgeable personal injury attorney
          as soon as possible is essential to ensuring you receive the
          compensation you deserve. A skilled attorney will guide you through
          dealing with insurance companies, helping to negotiate a settlement
          that fully accounts for your medical expenses, lost income, and other
          damages. Delaying legal consultation can have serious consequences.
          Critical evidence, such as witness statements, photos, or physical
          evidence from the accident scene, can be lost or degraded over time.
          Additionally, insurance companies may try to take advantage of your
          delay by offering inadequate settlements or undermining your claim. By
          acting quickly and seeking experienced legal counsel, you not only
          ensure your ability to build a strong case but also gain an advocate
          who will work tirelessly to ensure your voice is heard and your losses
          are fully compensated.
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
