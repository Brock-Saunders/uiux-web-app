import SubpageHeader from "../components/SubpageHeader";
import ResourcesServices from "../components/ResourcesServices";
import ResourcesPublic from "../components/ResourcesPublic";
import GetStartedBanner from "../components/GetStartedBanner";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";

export default function Resources() {
  return (
    <div>
      <SubpageHeader
        title="Resources"
        description="Whether you are new to the Orlando area or simply moving
         to a new side of town, getting settled in can always be a little 
         nerve-racking.  Below are some website links that will help make your 
         move as seamless as possible.  We hope that you will find these links useful!"
      />
      <ResourcesServices />
      <ResourcesPublic />
      <GetStartedBanner />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
