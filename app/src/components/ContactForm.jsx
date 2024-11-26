import { Textarea, Input, Button } from "@mui/joy";
import { contactForm } from "../api/contact_form";
import { useState } from "react";

import PhoneNumberInput from "./PhoneNumberInput";
import EmailInput from "./EmailInput";

export default function ContactForm() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full bg-beige text-gray-700">
      <div className="md:grid grid-cols-5 w-full w-full md:max-w-7xl mx-auto py-20 md:py-32 px-5 md:px-16 gap-x-16">
        <div className="col-span-3">
          <div className="text-xl md:text-3xl md:text-4xl font-serif mb-10">
            Get In Touch
          </div>
          {submitted ? (
            <div>
              Thank you for your message. We will get back to you as soon as
              possible.
            </div>
          ) : (
            <div className="space-y-7">
              <div className="md:flex md:space-x-5 space-y-5">
                <div className="w-full">
                  <div className="ml-1 mb-1">First Name</div>
                  <Input
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder="e.g. John"
                    variant="outlined"
                  />
                </div>
                <div className="w-full">
                  <div className="ml-1 mb-1">Last Name</div>
                  <Input
                    onChange={(e) => setLast(e.target.value)}
                    placeholder="e.g. Doe"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-5 space-y-5">
                <div className="w-full">
                  <div className="ml-1 mb-1">Your Email</div>
                  <EmailInput
                    value={email}
                    setValue={setEmail}
                    placeholder="e.g. jdoe@example.com"
                  />
                </div>
                <div className="w-full">
                  <div className="ml-1 mb-1">Your Phone</div>
                  <PhoneNumberInput
                    value={phone}
                    setValue={setPhone}
                    placeholder="e.g. (111) 111-1111"
                  />
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="ml-1 mb-1">Your Message</div>
                  <Textarea
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type in here…"
                    minRows={5}
                  />
                </div>
                <Button
                  onClick={() =>
                    contactForm(first, last, email, phone, message).then(
                      (res) => {
                        if (res.status === 200) {
                          setSubmitted(true);
                        } else {
                          alert(res.data);
                        }
                      }
                    )
                  }
                  sx={crimsonButtonStyle}
                >
                  Send Message
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-24 md:mt-0 col-span-2">
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
