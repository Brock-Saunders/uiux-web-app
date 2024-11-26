import React, { useState } from "react";
import gavel from "../assets/gavel-2.png";
import ListRow from "./ListRow";
import { useTranslation } from "react-i18next";

export default function ResourcesServices() {
  const { t } = useTranslation(); // Hook for translations

  return (
    <div className="w-full bg-beige">
      <div className="px-16 w-full md:max-w-7xl w-full relative pt-32 mx-auto">
        <div className="relative flex items-center">
          <div className="md:w-3/5 mt-32 md:mt-0 max-h-[500px] overflow-hidden shadow-xl">
            <img src={gavel} />
          </div>
          <div className="absolute right-0 -top-[136px] md:top-0 md:w-1/2 flex items-center translate-y-16 translate-x-10">
            <div className="text-4xl md:text-6xl font-serif text-gray-700">
              Professional Legal Services Offered by{" "}
              <a className="text-gold md:text-gray-700">Laassel Law Firm</a>
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-16 md:pt-32">
          <div className="md:grid grid-cols-2 gap-x-24 mx-auto w-4/5">
            <ServiceRow
              service="Immigration"
              description={
                <>
                  <p>
                    <i>
                      "The land flourished because it was fed from so many
                      sources – because it was nourished by so many cultures and
                      traditions and peoples." – Lyndon B. Johnson
                    </i>
                  </p>
                  <br />
                  <p>
                    The United States is a land of opportunity, and as an
                    immigrant herself, Amal takes pride in assisting those on
                    their immigration journey.
                  </p>
                  <br />
                  <p>
                    <b>
                      Laassel Law provides a range of immigration services,
                      including:
                    </b>
                    <ul className="list-disc pl-5">
                      <li>K1/K3 Visas</li>
                      <li>F1 & M1 Visas</li>
                      <li>Business and Investor Visas (EB5, E1, E2, L-1)</li>
                      <li>H1-B Healthcare Professionals</li>
                      <li>Asylum/Refugee Petitions</li>
                      <li>Permanent Resident (Green Card)</li>
                      <li>U.S. Citizenship</li>
                    </ul>
                  </p>
                  <br />
                  <p>
                    The United States offers countless opportunities to study,
                    work, and build a family. However, immigration laws can be
                    complex and confusing. To navigate the process successfully,
                    it's crucial to have an expert on your side who understands
                    the ins and outs of U.S. immigration law.
                  </p>
                  <br />
                  <p>
                    At Laassel Law, we guide you through the entire immigration
                    process, ensuring you never feel alone. Whether you're a
                    student, business professional, or individual seeking a
                    better future, we’re here to help you every step of the way.
                  </p>
                  <br />
                  <p>
                    With a dedicated team supporting you, Laassel Law ensures
                    the best possible outcome. Located in Orlando or anywhere
                    else, call Amal today for a free consultation to discuss
                    your immigration options. Amal is fluent in English, Arabic,
                    and Spanish and is ready to help with all your immigration
                    needs.
                  </p>
                </>
              }
            />
            <ServiceRow
              service="Personal Injury"
              description={
                <>
                  <p>
                    The aftermath of a serious accident can be devastating, with
                    large medical bills, pain and suffering, loss of income, and
                    a significant drop in quality of life. You may rely on the
                    at-fault party’s insurance company to handle your claim
                    fairly, but it’s important to remember that insurance
                    companies are primarily driven by profits and often place
                    their interests above yours. They rarely consider how your
                    injuries have impacted you and your family and will try to
                    settle for the minimum value.
                  </p>
                  <br />
                  <p>
                    An Orlando personal injury attorney can represent you if you
                    have been hurt due to the negligence or wrongdoing of
                    another individual, company, or government entity. If
                    someone else is at fault, the law allows you to pursue a
                    claim for damages and seek the compensation you deserve.
                  </p>
                </>
              }
            />
            <ServiceRow
              service="Auto Accidents"
              description={
                <>
                  <p>
                    At Laassel Law, our experienced car accident attorneys are
                    committed to standing up for the rights of individuals
                    injured in car accidents and helping them recover maximum
                    compensation for their injuries. A car accident can be an
                    extremely traumatic event, and if you or a loved one have
                    been seriously injured, your first step should always be to
                    seek medical treatment. We firmly believe that your health
                    should be your number one priority and strongly encourage
                    our clients to seek the medical attention they need to help
                    prevent any long-term effects of their injuries.
                  </p>
                  <br />
                  <p>
                    The aftermath of a car accident can also be very stressful,
                    with mounting medical bills, missing time from work, getting
                    your car repaired, and navigating the complex insurance
                    claims process. At Laassel Law, our goal is to alleviate
                    that stress while you focus solely on recovering from your
                    injuries. We’ll walk with you every step of the way,
                    ensuring you never feel alone. Each car accident case is
                    unique, and we bring our extensive resources and skills to
                    provide the highest quality in every case, no matter the
                    circumstances.
                  </p>
                  <br />
                  <p>
                    Our law firm takes all car accident cases on a contingency
                    fee basis, meaning we don’t get paid unless we recover
                    compensation for you. Our success is directly tied to the
                    success of our clients, so you can trust we’re working as
                    hard as possible to ensure you recover for your injuries. If
                    you’ve been seriously injured in a car accident, contact the
                    experienced attorneys at Laassel Law today to schedule a
                    free consultation!
                  </p>
                </>
              }
            />
            <ServiceRow
              service="Premises Liability"
              description={
                <>
                  <p>
                    Poor lighting, unsafe stairs, debris or liquids left in an
                    aisle, a leaky refrigeration unit in a grocery store, a
                    grease spill in a restaurant, uneven flooring, or loose
                    carpet — all these conditions can cause slip-and-fall or
                    trip-and-fall accidents, leading to serious injuries. In
                    Florida, property owners have a legal duty to maintain their
                    premises in a reasonably safe condition. Unfortunately,
                    owners do not always take the necessary steps to ensure
                    safety and often fail to take responsibility for injuries
                    that occur on their property.
                  </p>
                  <br />
                  <p>
                    At Laassel Law, we are committed to holding property owners
                    accountable and ensuring that you are treated fairly. With
                    our no-fee policy, you only pay attorneys' fees if we
                    successfully secure results in your case. We are dedicated
                    to fighting for your rights and helping you get the
                    compensation you deserve.
                  </p>
                </>
              }
            />
            <ServiceRow
              service="Wrongful Death"
              description={
                <>
                  <p>
                    At Laassel Law, we understand that after the loss of a loved
                    one, pursuing a legal case may not be a priority. However,
                    it is crucial for the survivors of the deceased to consider
                    seeking an attorney right away. The Florida Wrongful Death
                    Act allows relatives who depended on the deceased for
                    financial or emotional support to seek compensation for
                    their loss. Spouses, children, parents, siblings, and other
                    relatives are eligible to file a wrongful death claim. If
                    you're unsure whether you can file a wrongful death claim,
                    call us today for a free consultation.
                  </p>
                  <br />
                  <p>
                    There is a time limit to file a wrongful death claim, and
                    failure to do so within that time frame may prevent
                    claimants from receiving compensation for their loss. If you
                    are in the Orlando area or anywhere in Florida and have lost
                    a loved one unexpectedly, please contact us immediately. We
                    are passionate about helping our clients and are dedicated
                    to assisting them in times of need. Feel free to contact us
                    anytime to receive a free consultation.
                  </p>
                  <br />
                  <p>
                    The Florida Wrongful Death Act can be{" "}
                    <a
                      href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0700-0799/0768/Sections/0768.16.html"
                      target="_blank"
                      style={{ color: "crimson" }}
                    >
                      accessed here
                    </a>
                    .
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({ service, description, border = true }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <ListRow question={service} anwser={isOpen ? description : ""} />
      </div>
      {isOpen && (
        <div
          className="pt-4 text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}
      {border && <div className="my-7 w-full h-[0.5px] bg-gray-700"></div>}
    </div>
  );
}
