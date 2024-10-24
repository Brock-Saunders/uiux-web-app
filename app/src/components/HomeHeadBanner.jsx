import scales from "../assets/scales-of-justice.png";

export default function HomeHeadBanner() {
  return (
    <div className="flex w-full bg-beige text-white pt-14 pb-24">
      <div className="mx-auto px-16 max-w-7xl w-full relative">
        <div className="relative">
          <div className="w-4/5 ml-auto max-h-[500px] overflow-hidden shadow-xl">
            <img src={scales} />
          </div>
          <div className="absolute inset-0 flex items-center w-1/2 -translate-y-12">
            <div className="text-6xl font-serif text-gray-700">
              Uphold truth for justice with <a className="text-gold">Laasel</a>{" "}
              Law Firm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
