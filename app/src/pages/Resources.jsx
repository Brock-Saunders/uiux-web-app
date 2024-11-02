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
        description="Sint reprehenderit cillum duis duis esse exercitation consequat. Esse deserunt culpa nisi dolor minim ipsum veniam pariatur. Elit aliqua cupidatat sit Lorem. Magna dolor ipsum voluptate voluptate voluptate ad eu reprehenderit. Est elit amet nulla esse velit do labore proident ea commodo qui voluptate enim irure. Amet adipisicing officia fugiat nisi fugiat cillum."
      />
      <ResourcesServices />
      <ResourcesPublic />
      <GetStartedBanner />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}
