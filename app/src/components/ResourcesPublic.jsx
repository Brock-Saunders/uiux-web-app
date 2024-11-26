import ListRow from "./ListRow";
import { useState } from "react";

export default function ResourcesPublic() {
  const [activeIndexes, setActiveIndexes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleDropdown = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="pt-16 w-full bg-beige text-gray-700">
      <div className="w-full md:max-w-7xl w-full md:px-16 py-32 mx-auto">
        <div className="flex items-center">
          <div className="text-3xl w-1/5 mx-16 md:mx-0 font-serif md:ml-16 mr-10">
            Resources
          </div>
          <div className="mx-16 md:mx-0 w-full h-[0.5px] bg-gray-700"></div>
        </div>
        <div className="mx-16 md:mx-0 md:ml-16 mt-16 mb-12 space-y-10">
          <ListRow
            question="Local Religious Communities"
            answer={
              <>
                <p className="mb-4 font-semibold">Mosques:</p>
                <ul className="mb-6 space-y-2">
                  <li>
                    Islamic Society of Central Florida:&nbsp;
                    <a
                      href="https://www.iscf.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      www.iscf.org
                    </a>
                  </li>
                  <li>
                    Al-Bir Educational Center:&nbsp;
                    <a
                      href="https://www.albircenter.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      www.albircenter.org
                    </a>
                  </li>
                  <li>
                    American Muslim Community Centers:&nbsp;
                    <a
                      href="https://www.amccenters.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      www.amccenters.org
                    </a>
                  </li>
                </ul>

                <p className="mb-4 font-semibold">Churches:</p>
                <ul className="mb-6 space-y-2">
                  <li>
                    The Hope Church:&nbsp;
                    <a
                      href="http://thehopechurch.org/thehopechurch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      thehopechurch.org
                    </a>
                  </li>
                  <li>
                    First Baptist of Orlando:&nbsp;
                    <a
                      href="http://www.firstorlando.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      firstorlando.com
                    </a>
                  </li>
                  <li>
                    Trinity Downtown:&nbsp;
                    <a
                      href="http://church.trinitydowntown.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      church.trinitydowntown.com
                    </a>
                  </li>
                  <li>
                    Spirit of Joy:&nbsp;
                    <a
                      href="http://www.spiritofjoy.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      spiritofjoy.org
                    </a>
                  </li>
                </ul>

                <p className="mb-4 font-semibold">Hindu Temple:</p>
                <ul className="mb-6 space-y-2">
                  <li>
                    Hindu Society of Central Florida:&nbsp;
                    <a
                      href="http://www.hindutempleorlando.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      hindutempleorlando.org
                    </a>
                  </li>
                </ul>

                <p className="mb-4 font-semibold">Synagogues:</p>
                <ul className="space-y-2">
                  <li>
                    Chabad of South Orlando:&nbsp;
                    <a
                      href="http://www.jewishorlando.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      jewishorlando.com
                    </a>
                  </li>
                  <li>
                    Congregation of Reform Judaism:&nbsp;
                    <a
                      href="http://www.crjorlando.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      crjorlando.org
                    </a>
                  </li>
                  <li>
                    Southwest Orlando Jewish Congregation:&nbsp;
                    <a
                      href="http://www.sojc.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      sojc.org
                    </a>
                  </li>
                </ul>
              </>
            }
            isOpen={activeIndexes[0]}
            toggleDropdown={() => toggleDropdown(0)}
          />
          <ListRow
            question="K-12 & Secondary Education, Child Care"
            answer={
              <>
                <p className="mb-4 font-semibold">
                  Religious Academic Centers:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>
                    Central Florida Christian Academy:&nbsp;
                    <a
                      href="http://cfcaeagles.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      cfcaeagles.org
                    </a>
                  </li>
                  <li>
                    Faith Christian Academy:&nbsp;
                    <a
                      href="https://www.fcalions.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      fcalions.org
                    </a>
                  </li>
                  <li>
                    Jewish Academy of Orlando:&nbsp;
                    <a
                      href="http://www.jewishacademyorlando.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      jewishacademyorlando.org
                    </a>
                  </li>
                  <li>
                    LPS Islamic School:&nbsp;
                    <a
                      href="http://www.leaderspreparatoryschool.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      leaderspreparatoryschool.org
                    </a>
                  </li>
                  <li>
                    Muslim Academy of Greater Orlando:&nbsp;
                    <a
                      href="http://magorlando.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      magorlando.net
                    </a>
                  </li>
                  <li>
                    Orlando Jewish Day School:&nbsp;
                    <a
                      href="http://www.orlandojewishdayschool.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      orlandojewishdayschool.com
                    </a>
                  </li>
                  <li>
                    Trinity Lutheran School:&nbsp;
                    <a
                      href="http://school.trinitydowntown.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      school.trinitydowntown.com
                    </a>
                  </li>
                </ul>

                <p className="mb-4 font-semibold">
                  Non-Religious Academic Centers:
                </p>
                <ul className="mb-6 space-y-2">
                  <li>
                    Lake Highland Preparatory School:&nbsp;
                    <a
                      href="http://www.lhps.org/lhps/lhp/Home.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      lhps.org
                    </a>
                  </li>
                  <li>
                    Orange County Public Schools:&nbsp;
                    <a
                      href="https://www.ocps.net/Pages/default.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      ocps.net
                    </a>
                  </li>
                  <li>
                    Page Private School:&nbsp;
                    <a
                      href="http://www.pageschool.com/new2/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      pageschool.com
                    </a>
                  </li>
                  <li>
                    Windermere Preparatory School:&nbsp;
                    <a
                      href="http://www.windermereprep.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      windermereprep.com
                    </a>
                  </li>
                </ul>

                <p className="mb-4 font-semibold">Secondary Education:</p>
                <ul className="space-y-2">
                  <li>
                    Rollins College:&nbsp;
                    <a
                      href="http://www.rollins.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      rollins.edu
                    </a>
                  </li>
                  <li>
                    University of Central Florida:&nbsp;
                    <a
                      href="http://www.ucf.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      ucf.edu
                    </a>
                  </li>
                  <li>
                    UCEDA English School:&nbsp;
                    <a
                      href="http://www.ucedaschool.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      ucedaschool.edu
                    </a>
                  </li>
                  <li>
                    Valencia College:&nbsp;
                    <a
                      href="http://www.valenciacollege.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      valenciacollege.edu
                    </a>
                  </li>
                </ul>
              </>
            }
            isOpen={activeIndexes[1]}
            toggleDropdown={() => toggleDropdown(1)}
          />

          <ListRow
            question="Real Estate Brokers/Agencies"
            answer={
              <>
                <ul className="space-y-2">
                  <li>
                    Prestige Realty Professionals:&nbsp;
                    <a
                      href="http://www.prestigerealtypros.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      prestigerealtypros.com
                    </a>
                  </li>
                </ul>
              </>
            }
            isOpen={activeIndexes[2]}
            toggleDropdown={() => toggleDropdown(2)}
          />
          <ListRow
            question="Utility Companies"
            answer={
              <>
                <ul className="space-y-2">
                  <li>
                    Orlando Utilities Commission:&nbsp;
                    <a
                      href="http://www.ouc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      ouc.com
                    </a>
                  </li>
                  <li>
                    Orange County Utilities:&nbsp;
                    <a
                      href="https://utilities.ocfl.net/OCUD/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      utilities.ocfl.net/OCUD
                    </a>
                  </li>
                  <li>
                    Kissimmee Utility Authority:&nbsp;
                    <a
                      href="http://www.kua.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      kua.com
                    </a>
                  </li>
                  <li>
                    Duke Energy:&nbsp;
                    <a
                      href="http://www.duke-energy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      duke-energy.com
                    </a>
                  </li>
                </ul>
              </>
            }
            isOpen={activeIndexes[3]}
            toggleDropdown={() => toggleDropdown(3)}
          />
          <ListRow
            question="Cable and Internet Companies"
            answer={
              <>
                <ul className="space-y-2">
                  <li>
                    AT&T:&nbsp;
                    <a
                      href="https://www.att.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      att.com
                    </a>
                  </li>
                  <li>
                    Bright House Networks:&nbsp;
                    <a
                      href="https://www.brighthouse.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      brighthouse.com
                    </a>
                  </li>
                  <li>
                    Comcast:&nbsp;
                    <a
                      href="https://www.comcast.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      comcast.com
                    </a>
                  </li>
                  <li>
                    Xfinity:&nbsp;
                    <a
                      href="https://www.xfinity.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      xfinity.com
                    </a>
                  </li>
                </ul>
              </>
            }
            isOpen={activeIndexes[4]}
            toggleDropdown={() => toggleDropdown(4)}
          />

          <ListRow
            question="Important Government Websites"
            answer={
              <>
                <ul className="space-y-2">
                  <li>
                    Florida Department of Highway Safety and Motor
                    Vehicles:&nbsp;
                    <a
                      href="https://www.flhsmv.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      flhsmv.gov
                    </a>
                  </li>
                  <li>
                    Florida Department of State:&nbsp;
                    <a
                      href="https://www.sunbiz.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      sunbiz.org
                    </a>
                  </li>
                  <li>
                    MyFlorida:&nbsp;
                    <a
                      href="https://www.myflorida.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      myflorida.com
                    </a>
                  </li>
                  <li>
                    Social Security Administration:&nbsp;
                    <a
                      href="https://www.ssa.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      ssa.gov
                    </a>
                  </li>
                  <li>
                    USA.gov:&nbsp;
                    <a
                      href="https://www.usa.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      usa.gov
                    </a>
                  </li>
                  <li>
                    United States Citizenship and Immigration Services
                    (USCIS):&nbsp;
                    <a
                      href="https://www.uscis.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      uscis.gov
                    </a>
                  </li>
                </ul>
              </>
            }
            isOpen={activeIndexes[5]}
            toggleDropdown={() => toggleDropdown(5)}
          />

          <ListRow
            question="Local Organizations"
            answer={
              <>
                <ul className="space-y-2">
                  <li>
                    Arab American Community Center of Florida:&nbsp;
                    <a
                      href="https://www.aaccflorida.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      aaccflorida.org
                    </a>
                  </li>
                  <li>
                    Moroccan American Business Alliance:&nbsp;
                    <a
                      href="https://www.mabafl.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      mabafl.com
                    </a>
                  </li>
                  <li>
                    Moroccan American Chamber of Commerce:&nbsp;
                    <a
                      href="https://www.maccflorida.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      maccflorida.com
                    </a>
                  </li>
                  <li>
                    Orlando Regional Chamber of Commerce:&nbsp;
                    <a
                      href="https://www.orlando.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      orlando.org
                    </a>
                  </li>
                  <li>
                    Orlando Rotary Club:&nbsp;
                    <a
                      href="https://rotaryorlando.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      rotaryorlando.org
                    </a>
                  </li>
                  <li>
                    The Roth Family Jewish Community Center of Greater
                    Orlando:&nbsp;
                    <a
                      href="https://orlandojcc.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700 hover:underline"
                    >
                      orlandojcc.org
                    </a>
                  </li>
                </ul>
              </>
            }
            isOpen={activeIndexes[6]}
            toggleDropdown={() => toggleDropdown(6)}
          />
        </div>
      </div>
    </div>
  );
}
