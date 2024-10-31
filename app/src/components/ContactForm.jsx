import { Textarea, Input, Button } from "@mui/joy";
import MapChart from "./MapChart";

export default function ContactForm() {
  return (
    <div className="w-full bg-beige">
      <div className="grid grid-cols-5 w-full max-w-7xl py-32 px-16 gap-x-5">
        <div className="col-span-3">
          <div className="text-4xl font-serif mb-10">Get In Touch</div>
          <div className="space-y-7">
            <div className="flex space-x-5">
              <div className="w-full">
                <div className="ml-1 mb-1">First Name</div>
                <Input placeholder="Type in here…" variant="outlined" />
              </div>
              <div className="w-full">
                <div className="ml-1 mb-1">Last Name</div>
                <Input placeholder="Type in here…" variant="outlined" />
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="w-full">
                <div className="ml-1 mb-1">Your Email</div>
                <Input placeholder="Type in here…" variant="outlined" />
              </div>
              <div className="w-full">
                <div className="ml-1 mb-1">Your Phone</div>
                <Input placeholder="Type in here…" variant="outlined" />
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <div className="ml-1 mb-1">Your Message</div>
                <Textarea placeholder="Type in here…" minRows={5} />
              </div>
              <Button sx={crimsonButtonStyle}>Send Message</Button>
            </div>
          </div>
        </div>
        <div className="w-full bg-red-200 w-full">
          <div>
            <MapChart />
          </div>
        </div>
      </div>
    </div>
  );
}

const crimsonButtonStyle = {
  background: "#982720",
  "&:hover": {
    background: "#b72d25",
  },
};
