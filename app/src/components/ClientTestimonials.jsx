import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ClientTestimonials() {
  const { t } = useTranslation();

  const testimonials = t("clientTestimonials.testimonials", {
    returnObjects: true,
  });

  // Maximum text length before truncating
  const maxTextLength = 200;

  return (
    <div className="bg-beige text-gray-700 py-20 md:py-24">
      <div className="w-full md:max-w-7xl mx-auto px-12 md:px-4">
        <h2 className="text-4xl font-serif text-center mb-24 md:mb-12">
          {t("clientTestimonials.title")}
        </h2>
        {testimonials.map((testimonial, index) => {
          const [isExpanded, setIsExpanded] = useState(false);
          const isTextLong = testimonial.text.length > maxTextLength;

          const displayText = isExpanded
            ? testimonial.text
            : `${testimonial.text.slice(0, maxTextLength)}...`;

          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-12"
            >
              <div className="col-span-1 flex flex-col justify-center items-start">
                <div className="text-xl md:text-2xl font-semibold">
                  {testimonial.author}
                </div>
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
                <p className="leading-7 mt-2">
                  {displayText}
                  {isTextLong && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="ml-2 text-crimson underline"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
