import client from "../assets/client.png";
const testimonials = [
  {
    title: "Personal Injury Case",
    text: `I was recommended to Amal Laassel, by a dear friend, who had worked with her. I was more than impressed with her. Her professional manner is above any expectations. Her kindness is so refreshing, and her diligence too.
    
    When no one would take my case, she did, and stayed the course to the finish. At one point the case looked dead, and again, she put in another try, and it was then settled! Had it not been for her diligence, things would have been definitely different.
    
    I recommend Amal to anyone needing an attorney, who will stay true to the end, and will do it with kindness and efficiency. She was amazingly thorough and organized. Call Amal if you need someone to do what needs to be done, in an efficient way.`,
    author: "Trish",
    date: "Jan 23, 2016",
    stars: 5,
  },
  {
    title: "Personal Injury Case",
    text: `If you are looking for a dedicated, highly skilled, tenacious, engaged, professional attorney, look no further, Amal Laassel is this and more.
    
    Amal impressed us the minute she introduced herself and made a house call. Always accessible, she answered all questions thoroughly, and committed herself to our case where other ADVERTISED attorney firms denied their service because they simply felt we had no case.
    
    We have never had a lawyer, and just by chance, surfing the web she caught my attention and the next day was at our doorstep. Upon hearing our case, she was attentive, engaged and listened so intently, and displayed such interest and said that we had a legitimate case and would be happy to represent us. My husband told her that he gave up after being told by the largest attorney's office in Orlando that they wouldn't take his case.
    
    However, not the decision Amal made. Her passion and talent in her field proved otherwise and as we moved forward, the end result was in our favor because of her tenacity and commitment. My husband fell 16' and sustained such horrific injuries he needed to be airlifted to the trauma center at ORMC. Cat Scans of the head, Lumbar Spine, Chest, Abdomen and Pelvis were ordered in addition, right scapular STAT. These films revealed a concussion, ruptured right Tempanic Membrane, fractures of seven ribs, fracture of right clavicle, fracture of right scapula, fractures of L1, L2, L3 and L4. This does not complete the list of all external and internal injuries as it was so extensive and due to such trauma many of our neighbors whom happen to be nurses felt that he may not make it.
    
    Being greeted by a chaplain was very unnerving and determined my worse nightmare, but somehow by the grace of God my husband pulled through. Sustaining such injuries, and the cost of these injuries and the pain endured during this time took years off our lives. Not to mention the financial burden with over $200,000 in medical costs.
    
    However with Amal by our side and fighting our case, committed and passionate, proved that there was light at the end of the tunnel. We would highly recommend Attorney Laassel, she proved to be the best decision in the most gloomy situation and came through for us with shining colors. Look no further, she is indeed the best attorney with such sincerity, passion and knowledge in her field, we give her 5 stars!! Thank you so much Amal for your dedication and not turning away our case. We are so humbled and grateful for your hard work and commitment Amal and we thank you sincerely from the bottom of our hearts.`,
    author: "Pierre",
    date: "Dec 30, 2015",
    stars: 5,
  },
  {
    title: "Immigration Case",
    text: `I hired Amal Laassel after I got married so to get my permanent residence. She did such an awesome job I was impressed about how meticulous she is, she made sure everything was perfect before submitting and always gave more that enough time to welcome me at her office and answer my questions, also I was very satisfied with how fast her service is as like replying to the emails. she also prepared me very well and made sure we go through all the areas over and over. all the process took way shorter than it normally does or from which I was expecting. Thank you Amal!`,
    author: "Youssef",
    date: "Dec 28, 2015",
    stars: 5,
  },
  {
    title: "Immigration Case",
    text: "My husband hired Amal to represent him during his immigration case -- she is amazing, and we would recommend her to anyone. She spent dedicated time on our application to ensure it was flawless before it was submitted, thoroughly prepared us for and walked us through each part of the process, and always made herself accessible to us -- she even met with us for two hours while she was on vacation to give us one last preparation before the big day!! Even though she expedited our case within her office, the application was so well put together that everything was processed and approved in less than 4 months! (That has to be some kind of record.) Thank you, thank you, thank you! With much gratitude, V&Y",
    author: "Veronica",
    date: "Dec 28, 2015",
    stars: 5,
  },
];

export default function ClientTestimonials() {
  return (
    <div className="bg-beige text-gray-700 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">
          What Our Clients Say About Us
        </h2>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-12"
          >
            <div className="col-span-2 flex flex-col justify-center items-start">
              <div className="text-xl font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">
                {new Date(testimonial.date).toLocaleDateString()}
              </div>
              <div className="flex mt-2">
                <div className="text-yellow-400">
                  {"★".repeat(testimonial.stars)}
                  {"☆".repeat(5 - testimonial.stars)}
                </div>
              </div>
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold">{testimonial.title}</h3>
              <p className="leading-7 mt-2">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
