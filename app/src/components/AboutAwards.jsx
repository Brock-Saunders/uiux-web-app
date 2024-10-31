import gavel from "../assets/gavel.png";

export default function AboutAwards() {
  return (
    <div className="flex w-full bg-beige text-white pt-32">
      <div className="mx-auto px-16 max-w-7xl w-full relative">
        <div className="relative flex items-center">
          <div className="w-3/5 max-h-[500px] overflow-hidden shadow-xl">
            <img src={gavel} />
          </div>
          <div className="absolute right-0 top-0 w-1/2 flex items-center translate-y-16 translate-x-10">
            <div className="text-6xl font-serif text-gray-700">
              The Best Award has been given to{" "}
              <a className="text-gold">Laasel</a> Law Firm
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-24 ml-auto w-3/5 space-y-5">
          <p>
            Ad tempor proident id non adipisicing magna velit nulla minim. Ut
            cillum id occaecat non do labore ipsum pariatur est deserunt. Irure
            sint sit cupidatat deserunt ipsum laborum aliquip culpa eu duis.
            Aute nisi sunt ea eu nostrud minim cillum nisi.
          </p>
          <p>
            Pariatur reprehenderit pariatur laboris laboris velit eu. Lorem aute
            cupidatat ex laboris reprehenderit tempor ad eu sunt ullamco
            eiusmod. Occaecat aliqua esse laboris anim veniam ut culpa commodo
            veniam nostrud eiusmod deserunt. Aliquip labore aliquip sit velit
            nisi fugiat excepteur duis eu eu. Culpa voluptate id in enim sint
            proident anim eiusmod.
          </p>
        </div>
        <div className="w-4/5 h-[1.25px] bg-gray-700 mx-auto mt-28 mb-10 shadow-xl"></div>
      </div>
    </div>
  );
}
