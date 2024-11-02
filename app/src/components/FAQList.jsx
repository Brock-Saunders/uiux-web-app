import { useState } from "react";
import arrow from "../assets/arrow.png";

export default function () {
  return (
    <div className="w-full bg-beige text-gray-700">
      <div className="max-w-7xl w-full px-16 py-32">
        <div className="flex items-center">
          <div className="text-3xl w-3/5 font-serif ml-16 mr-10">
            Frequently Asked Questions
          </div>
          <div className="w-full h-[0.5px] bg-gray-700"></div>
        </div>
        <div className="ml-16 mt-16 mb-12 space-y-10">
          <ListRow
            question="Irure dolor non ea culpa dolore?"
            anwser="Aute laborum ut laborum reprehenderit veniam pariatur qui consequat sunt. Id ut laborum enim sint anim officia minim est. Enim velit elit reprehenderit excepteur proident nisi ex reprehenderit aute. Nostrud proident cupidatat incididunt sunt sit incididunt velit nisi dolore consectetur veniam ea irure. Sunt commodo occaecat exercitation consequat eiusmod mollit. Ad nostrud commodo sunt enim. Officia labore consequat velit est Lorem."
          />
          <ListRow
            question="Proident sint Lorem adipisicing aliquip cillum proident commodo aute?"
            anwser="Aute irure adipisicing nulla commodo consequat veniam do nulla. Sint minim aute cillum dolore fugiat sit id nostrud id et anim irure laborum voluptate. Dolor quis est veniam consequat voluptate sit deserunt consequat mollit duis. In ullamco ex tempor veniam qui sunt excepteur labore eu magna occaecat proident pariatur quis."
          />
          <ListRow
            question="Aliquip irure aliqua quis esse adipisicing Lorem laborum ex proident ea sint Lorem ad?"
            anwser="Anim do elit irure ut officia tempor ea laboris laborum reprehenderit sint consectetur. Proident nostrud esse voluptate in dolor cillum excepteur et reprehenderit cillum commodo in sunt. In pariatur mollit cupidatat ullamco ex commodo eu. Lorem ut cupidatat non labore ea non aute adipisicing irure fugiat. Est cillum Lorem dolore dolor Lorem ut velit minim qui exercitation magna proident. Excepteur in ut nisi id minim ullamco magna voluptate Lorem consectetur. Adipisicing elit magna eu magna in velit."
          />
          <ListRow
            question="Nulla nulla aute aliqua aute anim cillum commodo dolore elit ipsum eiusmod cupidatat do esse?"
            anwser="Officia minim nostrud in ipsum culpa reprehenderit magna in nulla labore dolore. Veniam est aliquip veniam labore ex aliqua consequat officia exercitation mollit exercitation deserunt. Ex irure eiusmod qui ad laboris labore sit in dolor excepteur. Nisi ea excepteur proident fugiat non. Exercitation dolore esse labore aliquip velit consequat ut voluptate id fugiat magna. Ea irure dolore ad occaecat eu minim dolor magna et occaecat deserunt ipsum. Laboris aliquip ad quis reprehenderit labore aliqua proident pariatur enim occaecat cillum officia mollit sint."
          />
          <ListRow
            question="Sint aute sint velit ex esse voluptate eiusmod id ea sint reprehenderit ea velit minim?"
            anwser="Ullamco sunt anim ea cillum mollit proident adipisicing labore adipisicing ea fugiat sint nisi. Sint proident proident id ipsum culpa non ullamco dolore commodo. Est non amet qui elit deserunt labore ad minim. Commodo cillum elit amet excepteur sint magna amet voluptate consectetur ex eiusmod dolor. Fugiat amet reprehenderit proident veniam irure ullamco ad est nostrud reprehenderit nulla cillum."
          />
        </div>
      </div>
    </div>
  );
}

function ListRow({ question, anwser }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex items-center">
        <div className="text-xl font-serif">{question}</div>
        <div className="ml-auto hover:opacity-50 cursor-pointer">
          <img
            onClick={() => setOpen((p) => !p)}
            src={arrow}
            className={`w-5 ${open && "rotate-180"}`}
          />
        </div>
      </div>
      {open && <p className="mt-5">{anwser}</p>}
    </div>
  );
}
