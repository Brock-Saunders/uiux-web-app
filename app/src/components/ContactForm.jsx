import { Textarea, Input, Button } from "@mui/joy";
import office from "../assets/office.png";

export default function ContactForm() {
  return (
    <div className="w-screen bg-beige text-gray-700">
      <div className="grid grid-cols-5 w-full max-w-8xl py-32 px-16 gap-x-16">
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
        <div className="col-span-2">
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.985417462002!2d-81.40153592458141!3d28.449855975764944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c4cf2e81bd9%3A0x29350534ea331066!2s1650%20Sand%20Lake%20Rd%20suite%20114-a%2C%20Orlando%2C%20FL%2032809!5e0!3m2!1sen!2sus!4v1730550699892!5m2!1sen!2sus"
              className="w-full h-96 shadow-lg rounded-lg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
