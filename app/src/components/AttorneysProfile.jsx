import lawyer from "../assets/lawyer-portrait-2.png";

export default function AttorneysProfile() {
  return (
    <div className="w-full bg-beige text-gray-700">
      <div className="w-full max-w-7xl grid grid-cols-2 py-32">
        <div>
          <img src={lawyer} className="w-96 shadow-lg mx-auto" />
        </div>
        <div>
          <div className="text-4xl font-serif">Amal Laassel</div>
          <div className="font-serif text-xl mt-3 mb-7">Attorney</div>
          <div>
            Amal hails from Marrakesh, Morocco, where she lived until 
            her teenage years. At 16, Amal immigrated to the United States 
            as part of an international student exchange program. Amal 
            first moved to El Paso, Texas, where she lived with an American 
            host family until she graduated from high school.
          </div>
          <div className="flex space-x-12 mt-7">
            <div className="font-serif">
              <div className="text-lg">Experience</div>
              <div className="text-3xl">12+</div>
            </div>
            <div className="font-serif">
              <div className="text-lg">Cases Handled</div>
              <div className="text-3xl">662+</div>
            </div>
            <div className="font-serif">
              <div className="text-lg">Happy Clients</div>
              <div className="text-3xl">128+</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl pt-5 pb-40 mx-auto">
        <div className="grid grid-cols-2">
          <Quad
            title="Education"
            description={
            <>
            After graduating from high school, Amal relocated 
            to Orlando to attend the University of Central Florida. Amal 
            earned her B.A. in Political Science from UCF in 2004. 
            <br />
            <br />
            While attending UCF, Amal had the opportunity to intern at 
            the Legal Aid Society of the Orange County Bar Association. 
            It was during this time that she realized how many people were 
            denied access to the legal system solely because of a lack of 
            funds. It seemed unjust. The playing field was not level. It was 
            this experience that reinforced Amal’s existing desire to attend 
            law school.
            <br />
            <br />
            Amal attended law school at the University of Florida and earned her Juris Doctor in 2007. After graduating from UF Law, Amal joined a mid-size Personal Injury law firm in Ocala, Florida, where she had the unique opportunity to work alongside one of Florida’s first Board Certified Civil Trial lawyers. That mentoring opportunity provided her invaluable courtroom experience and furthered the development of her legal skills.
            </>
            }
          />
          <Quad
            title="Legal Experience"
            description={
            <>
            After graduating from UF Law, Amal joined a mid-size Personal 
            Injury law firm in Ocala, Florida, where she had the unique 
            opportunity to work alongside one of Florida’s first Board Certified 
            Civil Trial lawyers. That mentoring opportunity provided her invaluable 
            courtroom experience and furthered the development of her legal skills.
            <br />
            <br />
            In 2009, Amal moved back to Orlando and joined one of the largest 
            insurance defense firms in the country. While there, Amal handled 
            complex premises liability, personal injury, and general liability 
            actions on behalf of Fortune 500 Companies and large insurance carriers, 
            including the largest retailer in the world. In 2013, Amal was made a 
            Partner at the firm. She was the youngest attorney to ever make Partner.
            <br />
            <br />
            In 2014, after spending years defending large corporations and insurance 
            companies, Amal’s professional experience and internal desire to help 
            people were in serious conflict. She decided to make a long overdue 
            change and became a plaintiff's attorney, which allowed her to align 
            her career goals and personal values.
            </>
            }
          />
          <Quad
            title="Recognition"
            description={
            <>
            Amal has consistently been named as Florida’s Legal Elite Up and 
            Comers by Florida Trend magazine. Florida Legal Elite represents 
            the top 2% of attorneys practicing in the State of Florida. Attorneys 
            recognized through this award exemplify a standard of excellence in 
            their profession.
            <br />
            <br />
            Amal has also been selected as a “Women Who Mean Business” nominee 
            by the Orlando Business Journal.
            <br />
            <br />
            Very recently, Amal was selected by her peers as No. 1 Orlando 
            Legal Elite in her category and featured in Orlando Style Magazine.
            </>
            }/>
          <Quad
            title="Community"
            description={
            <>
            Amal serves as General Counsel for the Moroccan American Business Alliance.
            <br />
            <br />
            When she is not tending to her clients, Amal enjoys spending time with 
            her family and supporting her community. She has committed herself to 
            local charitable causes, including the Central Florida Chapter of the 
            Susan G. Komen Foundation, The Howard Phillips Center for Children and 
            Families, and Harbor House of Central Florida.
            <br />
            <br />
            Amal is admitted to practice in all Florida State courts, the United 
            States Middle District of Florida, and the United States Fifth Circuit 
            of Appeals.
            </>
            }/>
        </div>
      </div>
    </div>
  );
}

function Quad({ title, description }) {
  return (
    <div className="grid grid-cols-5 my-3 mx-3">
      <div className="mx-8 mt-3">
        <div className="w-full h-[0.5px] bg-gray-700"></div>
      </div>
      <div className="col-span-4">
        <div className="text-3xl font-serif">{title}</div>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
}
