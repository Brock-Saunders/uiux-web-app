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
            When no one would take my case, she did, and stayed the course 
            to the finish. At one point the case looked dead, and again, she 
            put in another try, and it was then settled! Had it not been for 
            her diligence, things would have been definitely different. I 
            recommend Amal to anyone needing an attorney, who will stay true 
            to the end, and will do it with kindness and efficiency. She was 
            amazingly thorough and organized. Call Amal if you need someone to 
            do what needs to be done, in an efficient way.
            </p>
            <div className="flex justify-end mt-10">- John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
}
