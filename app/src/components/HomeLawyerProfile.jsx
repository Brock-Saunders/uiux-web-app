import lawyer_portrait from "../assets/lawyer-portrait.png";

export default function HomeLawyerProfile() {
  return (
    <div className="flex w-full bg-beige text-gray-700 pt-20 pb-32">
      <div className="mx-auto px-16 max-w-7xl w-full relative ">
        <div className="grid grid-cols-3 divide-x-2 divide-crimson">
          <div className="w-full my-14">
            <img
              className="rounded-full w-52 mx-auto shadow-xl"
              src={lawyer_portrait}
            />
          </div>
          <div className="col-span-2">
            <div className="px-24 my-24 text-5xl font-serif">
              Helping to Overcome and Ease The Legal Burden
            </div>
          </div>
        </div>
        <div className="mr-24 ml-24 mt-24 ml-auto text-justify space-y-5">
          <p>
            In need of a Lawyer for Personal Injury? An Orlando personal injury 
            attorney can represent you in any situation where you have been hurt 
            due to the negligence or wrongdoing of another individual, a company, 
            or even a government employee or agency.
          </p>
          <p>
            Are you an immigrant that needs help adjsuting to a new area? Lassell 
            Law offers clients help with green cards, visa, deportation issues and 
            more. We have worked hard on a number of immigration cases with the 
            primary goal of keeping families together. We understand immigration 
            laws and the circumstances that may be affecting your family.
          </p>
        </div>
      </div>
    </div>
  );
}
