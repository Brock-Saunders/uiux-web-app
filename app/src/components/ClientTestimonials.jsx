import client from "../assets/client.png";

export default function ClientTestimonials() {
  return (
    <div>
      <div className="flex w-full bg-beige text-gray-700 py-24">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-7">
          <div className="col-span-2">
            <div className="ml-12 text-4xl font-serif">
              What Our Clients Say About Us
            </div>
            <img
              src={client}
              className="mr-5 w-48 mx-auto mt-16 rounded-full shadow-xl"
            />
          </div>
          <div className="my-auto col-span-5 max-w-xl mx-auto">
            <p className="leading-7">
              Labore anim in eu cillum cillum ex aliqua. Labore pariatur enim
              cillum cupidatat dolore irure est. Incididunt cupidatat cupidatat
              ipsum eiusmod in esse consequat amet minim. Anim nisi quis
              pariatur culpa consectetur consectetur duis esse proident anim
              nulla dolor commodo. Commodo tempor reprehenderit exercitation qui
              velit dolore tempor sit.
            </p>
            <div className="flex justify-end mt-10">- John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
}
