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
      <div className="w-full md:max-w-7xl w-full px-16 py-32 mx-auto">
        <div className="flex items-center">
          <div className="text-3xl w-3/5 font-serif ml-16 mr-10">
            {t("faq.header")}
          </div>
          <div className="w-full h-[0.5px] bg-gray-700"></div>
        </div>
        <div className="ml-16 mt-16 mb-12 space-y-10">
          {faqs.map((faq, index) => (
            <ListRow
              key={index}
              question={faq.question}
              answer={
                <div>
                  {faq.answer.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-6">
                      {item.title && (
                        <p className="font-semibold mb-2">{item.title}</p>
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
