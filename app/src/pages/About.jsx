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
        description="Laassel Law was founded with one goal 
        in mind: to provide high quality legal services in a 
        small firm environment. Laassel Law provide its clients 
        the sophistication of a large firm and the personal attention 
        of a small firm. Our attorneys will personally handle every 
        aspect of your case, from the initial consultation through resolution."
      />
      <AboutCompany />
      <GetStartedBanner />
      <AboutAwards />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
