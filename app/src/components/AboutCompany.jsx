import soj from "../assets/scales-of-justice-silver.png";

export default function AboutCompany() {
  return (
    <div className="flex w-full bg-beige text-gray-700 pt-16 md:pt-32 pb-32">
      <div className="mx-auto px-16 w-full md:max-w-7xl w-full relative">
        <div className="md:grid grid-cols-2 md:divide-x-2 divide-gray-700">
          <div className="md:px-24 md:my-32 text-3xl md:text-5xl font-serif">
            Helping to Overcome and Ease The Legal Burden
          </div>
          <div className="w-full my-14">
            <img className="w-96 mx-auto shadow-xl" src={soj} />
          </div>
        </div>
        <div className="mr-24 ml-24 mt-14 ml-auto text-justify space-y-5 w-full max-w-4xl">
          <p>
            At Laassel Law, we are committed to approaching each case with
            intellectual rigor and creative thinking in order to achieve the
            best possible results for our clients. Our lawyers have the
            knowledge and skills to solve our clients’ most difficult problems,
            whether through negotiation, motion practice, or trial.
          </p>
          <p>
            Our lawyers and staff are united not only by our enthusiasm and
            passion for the law but also by a relentless dedication to our
            clients. For us, it is not merely about the facts. It is about
            personal attention – to our clients and their story. We believe in
            personally connecting with our clients as individuals and
            determining why and what they need from our firm.
          </p>
          <p>
            Laassel Law is dedicated to serving the needs of individuals in the
            Orlando area and throughout the State of Florida. If you are in need
            of legal assistance, we invite you to call us at (407) 792-3953 for
            a free case evaluation.
          </p>
        </div>
      </div>
    </div>
  );
}
