import gavel from "../assets/gavel-2.png";
import ListRow from "./ListRow";

export default function ResourcesServices() {
  return (
    <div className="w-full bg-beige">
      <div className="px-16 max-w-7xl w-full relative pt-32">
        <div className="relative flex items-center">
          <div className="w-3/5 max-h-[500px] overflow-hidden shadow-xl">
            <img src={gavel} />
          </div>
          <div className="absolute right-0 top-0 w-1/2 flex items-center translate-y-16 translate-x-10">
            <div className="text-6xl font-serif text-gray-700">
              Professional Services Prepared to be Your Lawyer Firm
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-32">
          <div className="grid grid-cols-2 gap-x-24 mx-auto w-4/5">
            <ServiceRow
              service="Immigration"
              description="Amet exercitation enim eiusmod exercitation quis exercitation adipisicing elit."
            />
            <ServiceRow
              service="Personal Injury"
              description="Amet exercitation enim eiusmod exercitation quis exercitation adipisicing elit."
            />
            <ServiceRow
              service="Auto Accidents"
              description="Amet exercitation enim eiusmod exercitation quis exercitation adipisicing elit."
            />
            <ServiceRow
              service="Premises Liability"
              description="Amet exercitation enim eiusmod exercitation quis exercitation adipisicing elit."
            />
            <ServiceRow
              service="Wrongful Death"
              description="Amet exercitation enim eiusmod exercitation quis exercitation adipisicing elit."
              border={false}
            />
            <ServiceRow
              service="Education & Lawyer Consulation"
              description="Amet exercitation enim eiusmod exercitation quis exercitation adipisicing elit."
              border={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({ service, description, border = true }) {
  return (
    <div>
      <ListRow question={service} anwser={description} />
      {border && <div className="my-7 w-full h-[0.5px] bg-gray-700"></div>}
    </div>
  );
}
