import { Textarea, Input, Button } from "@mui/joy";
import { contactForm } from "../api/contact_form";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneNumberInput from "./PhoneNumberInput";
import EmailInput from "./EmailInput";

const manualTranslations = {
  en: {
    title: "Contact Us",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Your Email",
    phone: "Your Phone",
    message: "Your Message",
    submitButton: "Send Message",
    successMessage: "Thank you for your message. We will get back to you as soon as possible.",
    placeholders: {
      firstName: "e.g. John",
      lastName: "e.g. Doe",
      email: "e.g. jdoe@example.com",
      phone: "e.g. (111) 111-1111",
      message: "Type your message here…",
    },
  },
  es: {
    title: "Contáctenos",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Tu correo electrónico",
    phone: "Tu teléfono",
    message: "Tu mensaje",
    submitButton: "Enviar mensaje",
    successMessage: "Gracias por tu mensaje. Nos pondremos en contacto contigo lo antes posible.",
    placeholders: {
      firstName: "p. ej. Juan",
      lastName: "p. ej. Pérez",
      email: "p. ej. jperez@ejemplo.com",
      phone: "p. ej. (111) 111-1111",
      message: "Escribe tu mensaje aquí…",
    },
  },
  ar: {
    title: "اتصل بنا",
    firstName: "الاسم الأول",
    lastName: "الاسم الأخير",
    email: "بريدك الإلكتروني",
    phone: "هاتفك",
    message: "رسالتك",
    submitButton: "إرسال الرسالة",
    successMessage: "شكراً على رسالتك. سوف نتواصل معك في أقرب وقت ممكن.",
    placeholders: {
      firstName: "مثال: أحمد",
      lastName: "مثال: محمد",
      email: "مثال: ahmed@email.com",
      phone: "مثال: (111) 111-1111",
      message: "اكتب رسالتك هنا…",
    },
  },
  fr: {
    title: "Contactez-nous",
    firstName: "Prénom",
    lastName: "Nom de famille",
    email: "Votre courriel",
    phone: "Votre téléphone",
    message: "Votre message",
    submitButton: "Envoyer le message",
    successMessage: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
    placeholders: {
      firstName: "ex. Jean",
      lastName: "ex. Dupont",
      email: "ex. jdupont@email.com",
      phone: "ex. (111) 111-1111",
      message: "Tapez votre message ici…",
    },
  },
};

export default function ContactForm() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en"; // Detect language or fallback to English

  const translations = manualTranslations[currentLang] || manualTranslations["en"];

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full bg-beige text-gray-700">
      <div className="grid grid-cols-5 w-full md:max-w-7xl mx-auto py-32 px-16 gap-x-16">
        <div className="col-span-3">
          <div className="text-xl md:text-3xl font-serif mb-10">
            {translations.title}
          </div>
          {submitted ? (
            <div>{translations.successMessage}</div>
          ) : (
            <div className="space-y-7">
              <div className="md:flex md:space-x-5 space-y-5">
                <div className="w-full">
                  <div className="ml-1 mb-1">{translations.firstName}</div>
                  <Input
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder={translations.placeholders.firstName}
                    variant="outlined"
                  />
                </div>
                <div className="w-full">
                  <div className="ml-1 mb-1">{translations.lastName}</div>
                  <Input
                    onChange={(e) => setLast(e.target.value)}
                    placeholder={translations.placeholders.lastName}
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-5 space-y-5">
                <div className="w-full">
                  <div className="ml-1 mb-1">{translations.email}</div>
                  <EmailInput
                    value={email}
                    setValue={setEmail}
                    placeholder={translations.placeholders.email}
                  />
                </div>
                <div className="w-full">
                  <div className="ml-1 mb-1">{translations.phone}</div>
                  <PhoneNumberInput
                    value={phone}
                    setValue={setPhone}
                    placeholder={translations.placeholders.phone}
                  />
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="ml-1 mb-1">{translations.message}</div>
                  <Textarea
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={translations.placeholders.message}
                    minRows={5}
                  />
                </div>
                <Button
                  onClick={() =>
                    contactForm(first, last, email, phone, message).then((res) => {
                      if (res.status === 200) {
                        setSubmitted(true);
                      } else {
                        alert(res.data);
                      }
                    })
                  }
                  sx={crimsonButtonStyle}
                >
                  {translations.submitButton}
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
