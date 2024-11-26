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
      <div className="w-full md:max-w-7xl w-full px-16 py-24 md:py-32 mx-auto">
        <div className="flex items-center">
          <div className="text-2xl md:text-3xl w-3/5 font-serif md:ml-16 mr-10">
            Frequently Asked Questions
          </div>
          <div className="w-full h-[0.5px] bg-gray-700"></div>
        </div>
        <div className="md:ml-16 mt-16 mb-12 space-y-10">
          <ListRow
            question="What Should I do Immediately Following an Accident?"
            answer={
              <>
                <p>
                  <strong>Seek Medical Attention</strong> – If medical personnel
                  on the scene believe that you require emergency medical
                  attention, always follow their advice. Your health should be
                  your number one priority and you should not risk greater
                  injury by refusing to be transported to the hospital. If you
                  do not require emergency care, you should always seek an
                  evaluation from your doctor as soon as possible following the
                  accident.
                  <br />
                  <br />
                </p>
                <p>
                  <strong>Collect Information</strong> – If you are able to
                  remain at the scene of the accident, begin collecting as much
                  information as possible. Take photos of the scene of the
                  accident, including any conditions that are out of the
                  ordinary such as road hazards, marks, or anything else that
                  may seem relevant. Record the names and contact information of
                  all individuals involved in the incident or witnesses who
                  stopped.
                  <br />
                  <br />
                </p>
                <p>
                  <strong>Obtain a Written Report</strong> – When possible, make
                  sure you report the accident and obtain a copy of the written
                  report.
                  <br />
                  <br />
                </p>
                <p>
                  <strong>Write Down Your Recollections</strong> – As soon as
                  possible, write down your recollection of every possible
                  detail of the events before, during, and after the accident.
                  Memories fade and your case may take time to resolve,
                  therefore such notes will ensure that you accurately remember
                  the events and do not fail to recall important details at a
                  later date.
                  <br />
                  <br />
                </p>
                <p>
                  <strong>
                    Do Not Provide a Recorded Statement to the Insurance Company
                  </strong>{" "}
                  – The at-fault party’s insurance company may try to contact
                  you soon after your accident to “make sure that you are okay”.
                  You may be think that fault is clear and that speaking to the
                  adjuster is harmless. You may even think that you are
                  obligated to talk to that insurance company. You are not. Do
                  not speak to the at-fault party’s insurance company without
                  first consulting with an attorney.
                  <br />
                  <br />
                </p>
                <p>
                  <strong>Contact an Attorney</strong> – Following an accident,
                  you should always consult with an experienced personal injury
                  attorney as soon as possible. An experienced personal injury
                  attorney will help you negotiate with insurance companies and
                  ensure that you receive the full amount of compensation you
                  deserve for your losses. Any delay in discussing your case
                  with an experienced attorney may result in the loss or
                  destruction of critical evidence and possibly jeopardize your
                  ability to be compensated.
                </p>
              </>
            }
            isOpen={activeIndexes[0]}
            toggleDropdown={() => toggleDropdown(0)}
          />
          <ListRow
            question="How Much is My Personal Injury Case Worth?"
            answer={
              <>
                <p>
                  The answer is: every case is different. Your compensation will
                  depend on the negligence of the at-fault driver, the type of
                  injuries that you suffered, the amount of your medical bills,
                  and the individual “story” of your case. At Laassel Law, we
                  understand the complexities of the legal system and we have a
                  successful record of obtaining the compensation you deserve.
                  <br />
                  <br />
                </p>
                <p>
                  At Laassel Law, we will use our expertise to help you navigate
                  the complex rules and procedures involved in a personal injury
                  case. We will take the time to build a very strong case
                  against the negligent party in order to recover every penny
                  you are rightfully entitled to. We are not afraid to go to
                  court to get you the compensation you deserve!
                </p>
              </>
            }
            isOpen={activeIndexes[1]}
            toggleDropdown={() => toggleDropdown(1)}
          />
        </div>
      </div>
    </div>
  );
}
