import SubpageHeader from "../components/SubpageHeader";
import FAQList from "../components/FAQList";
import GetStartedBanner from "../components/GetStartedBanner";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";

export default function Faqs() {
  return (
    <div>
      <SubpageHeader
        title="FAQs"
        description="Sint reprehenderit cillum duis duis esse exercitation consequat. Esse deserunt culpa nisi dolor minim ipsum veniam pariatur. Elit aliqua cupidatat sit Lorem. Magna dolor ipsum voluptate voluptate voluptate ad eu reprehenderit. Est elit amet nulla esse velit do labore proident ea commodo qui voluptate enim irure. Amet adipisicing officia fugiat nisi fugiat cillum."
      />
      <FAQList />
      <GetStartedBanner />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
