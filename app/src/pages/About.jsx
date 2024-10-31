import SubpageHeader from "../components/SubpageHeader";
import Footer from "../components/Footer";
import ClientTestimonials from "../components/ClientTestimonials";
import GetStartedBanner from "../components/GetStartedBanner";
import AboutCompany from "../components/AboutCompany";
import AboutAwards from "../components/AboutAwards";

export default function About() {
  return (
    <div>
      <SubpageHeader
        title="About Us"
        description="Sint reprehenderit cillum duis duis esse exercitation consequat. Esse deserunt culpa nisi dolor minim ipsum veniam pariatur. Elit aliqua cupidatat sit Lorem. Magna dolor ipsum voluptate voluptate voluptate ad eu reprehenderit. Est elit amet nulla esse velit do labore proident ea commodo qui voluptate enim irure. Amet adipisicing officia fugiat nisi fugiat cillum."
      />
      <AboutCompany />
      <GetStartedBanner />
      <AboutAwards />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
