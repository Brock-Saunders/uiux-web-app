import SubpageHeader from "../components/SubpageHeader";
import AttorneysProfile from "../components/AttorneysProfile";
import Footer from "../components/Footer";

export default function Attorneys() {
  return (
    <div>
      <SubpageHeader
        title="Attorneys"
        description="Our team of attorneys is not only highly skilled but also 
        rigorously trained and certified in their respective fields. With advanced 
        legal education, specialized certifications, and years of hands-on experience, 
        our attorneys are equipped to handle even the most complex legal challenges 
        with confidence and expertise."
      />
      <AttorneysProfile />
      <Footer />
    </div>
  );
}
