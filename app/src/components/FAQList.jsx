import { useState } from "react";
import ListRow from "./ListRow";
import { useTranslation } from "react-i18next";

export default function FAQs() {
  const { t } = useTranslation();
  const faqs = t("faq.list", { returnObjects: true }); // Fetch the FAQ list
  const [activeIndexes, setActiveIndexes] = useState(
    new Array(faqs.length).fill(false)
  );

  const toggleDropdown = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="w-full bg-beige text-gray-700">
      <div className="w-full md:max-w-7xl px-16 py-24 md:py-32 mx-auto">
        {/* Header */}
        <div className="flex items-center">
          <div className="text-2xl md:text-3xl font-serif md:ml-16 mr-10">
            {t("faq.header")}
          </div>
          <div className="w-full h-[0.5px] bg-gray-700"></div>
        </div>

        {/* FAQ List */}
        <div className="md:ml-16 mt-16 mb-12 space-y-10">
          {faqs.map((faq, index) => (
            <ListRow
              key={index}
              question={faq.question}
              answer={
                <div className="space-y-5">
                  {faq.answer.map((item, idx) => (
                    <div key={idx}>
                      {item.title && (
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                      )}
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              }
              isOpen={activeIndexes[index]}
              toggleDropdown={() => toggleDropdown(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
