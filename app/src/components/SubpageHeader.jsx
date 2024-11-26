import NavBar from "./Navbar";

export default function SubpageHeader({ title, description }) {
  return (
    <div>
      <div className="bg-sojb w-full bg-cover bg-center">
        <div className="backdrop-blur-sm bg-crimson/80 h-full">
          <NavBar bgColor="" light />
          <div className="text-white mx-auto px-16 pt-14 pb-32 w-full md:max-w-7xl w-full relative ">
            <div className="grid grid-cols-3 divide-x-2 divide-white">
              <div className="w-full my-14 text-3xl md:text-5xl font-serif">
                {title}
              </div>
              <div className="col-span-2">
                <div className="px-24 my-1 leading-7">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
