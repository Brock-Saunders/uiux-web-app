import ContactForm from "../components/ContactForm";
import SubpageHeader from "../components/SubpageHeader";
import Footer from "../components/Footer";
import ContactInformationRow from "../components/ContactInformationRow";

export default function Contact() {
  return (
    <div>
      <SubpageHeader
        title="Contact"
        description="Sint reprehenderit cillum duis duis esse exercitation consequat. Esse deserunt culpa nisi dolor minim ipsum veniam pariatur. Elit aliqua cupidatat sit Lorem. Magna dolor ipsum voluptate voluptate voluptate ad eu reprehenderit. Est elit amet nulla esse velit do labore proident ea commodo qui voluptate enim irure. Amet adipisicing officia fugiat nisi fugiat cillum."
      />
      <ContactForm />
      <ContactInformationRow />
      <Footer />
    </div>
  );
}
