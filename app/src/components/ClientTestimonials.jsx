import React from "react";
import { useTranslation } from "react-i18next";

export default function ClientTestimonials() {
  const { t } = useTranslation();

  const testimonials = t("clientTestimonials.testimonials", {
    returnObjects: true,
  });

  return (
    <div className="bg-beige text-gray-700 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">
          {t("clientTestimonials.title")}
        </h2>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-12"
          >
            <div className="col-span-2 flex flex-col justify-center items-start">
              <div className="text-3xl font-semibold">{testimonial.author}</div>
              <div className="text-gray-500">
                {new Date(testimonial.date).toLocaleDateString()}
              </div>
              <div className="flex mt-2 text-lg">
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
