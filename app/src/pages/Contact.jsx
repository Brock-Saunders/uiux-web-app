import ContactForm from "../components/ContactForm";
import SubpageHeader from "../components/SubpageHeader";
import Footer from "../components/Footer";
import ContactInformationRow from "../components/ContactInformationRow";

export default function Contact() {
  return (
    <div>
      <SubpageHeader
        title="Contact"
        description="At Laassel Law, we are here to answer your questions and provide the guidance you need. Whether you are seeking legal advice or have a concern about your case, our team is ready to assist you. Please don’t hesitate to reach out via the contact form below, by phone, or by visiting our office. Your peace of mind is our priority, and we look forward to helping you."
      />
      <ContactForm />
      <ContactInformationRow />
      <Footer />
    </div>
  );
}
