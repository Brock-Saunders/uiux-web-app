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
        description={
          <p>
            The time after an accident can be confusing, and having questions
            regarding what to do is completely natural! Here at Laasel Law, we
            want to answer your questions to arm you with all the information
            you might need to proceed forward properly with your accident. Below
            are a few frequently asked questions that can help you. Don't see
            your question answered? Contact us!
          </p>
        }
      />
      <FAQList />
      <GetStartedBanner />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
