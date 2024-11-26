import React from "react";
import gavel from "../assets/gavel.png";
import { useTranslation } from "react-i18next";

export default function AboutAwards() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="flex w-full bg-beige text-white pt-32">
      <div className="mx-auto px-16 w-full md:max-w-7xl w-full relative">
        <div className="relative flex items-center">
          <div className="md:w-3/5 max-h-[500px] overflow-hidden shadow-xl">
            <img src={gavel} />
          </div>
          <div className="absolute right-0 -top-28 md:top-0 w-4/5 md:w-1/2 flex items-center translate-y-16 translate-x-10">
            <div className="text-3xl md:text-6xl font-serif text-gray-700">
              The Best Award has been given to{" "}
              <a className="text-gold">Laasel</a> Law Firm
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-16 md:pt-24 ml-auto md:w-3/5 space-y-5">
          <p>
            The "Best Award" recognizes law firms that have consistently
            demonstrated outstanding performance, commitment to excellence, and
            an unwavering dedication to their clients. Laasel Law Firm has
            earned this prestigious honor due to its exceptional track record in
            handling complex cases and delivering results that exceed client
            expectations. By prioritizing client needs and providing strategic,
            innovative legal solutions, the firm has built a reputation for
            excellence in a competitive legal landscape. Its team of attorneys
            is not only highly skilled but also deeply committed to ensuring
            that each client receives the best possible outcome.
          </p>
          <p>
            This recognition is a reflection of Laasel Law Firm's impact on the
            legal community and its role as a leader in the industry. The firm’s
            success is driven by its client-first approach and its ability to
            adapt to the evolving legal challenges of today's world. As a
            result, Laasel Law Firm has set a new standard of professionalism
            and ethical practice, inspiring both peers and clients alike. With a
            continued focus on excellence and innovation, Laasel Law Firm is
            well-positioned to maintain its status as one of the top legal firms
            in the country.
          </p>
        </div>
        <div className="w-4/5 h-[1.25px] bg-gray-700 mx-auto mt-28 mb-10 shadow-xl"></div>
      </div>
    </div>
  );
}
