import ListRow from "./ListRow";

export default function ResourcesPublic() {
  return (
    <div className="pt-16 w-full bg-beige text-gray-700">
      <div className="max-w-7xl w-full px-16 py-32">
        <div className="flex items-center">
          <div className="text-3xl w-1/5 font-serif ml-16 mr-10">Resources</div>
          <div className="w-full h-[0.5px] bg-gray-700"></div>
        </div>
        <div className="ml-16 mt-16 mb-12 space-y-10">
          <ListRow
            question="Local Religous Communities"
            anwser="Aute laborum ut laborum reprehenderit veniam pariatur qui consequat sunt. Id ut laborum enim sint anim officia minim est. Enim velit elit reprehenderit excepteur proident nisi ex reprehenderit aute. Nostrud proident cupidatat incididunt sunt sit incididunt velit nisi dolore consectetur veniam ea irure. Sunt commodo occaecat exercitation consequat eiusmod mollit. Ad nostrud commodo sunt enim. Officia labore consequat velit est Lorem."
          />
          <ListRow
            question="K-12 Education & Child Care"
            anwser="Aute irure adipisicing nulla commodo consequat veniam do nulla. Sint minim aute cillum dolore fugiat sit id nostrud id et anim irure laborum voluptate. Dolor quis est veniam consequat voluptate sit deserunt consequat mollit duis. In ullamco ex tempor veniam qui sunt excepteur labore eu magna occaecat proident pariatur quis."
          />
          <ListRow
            question="Real Estate Brokers/Agencies"
            anwser="Anim do elit irure ut officia tempor ea laboris laborum reprehenderit sint consectetur. Proident nostrud esse voluptate in dolor cillum excepteur et reprehenderit cillum commodo in sunt. In pariatur mollit cupidatat ullamco ex commodo eu. Lorem ut cupidatat non labore ea non aute adipisicing irure fugiat. Est cillum Lorem dolore dolor Lorem ut velit minim qui exercitation magna proident. Excepteur in ut nisi id minim ullamco magna voluptate Lorem consectetur. Adipisicing elit magna eu magna in velit."
          />
          <ListRow
            question="Cable and internet Companies"
            anwser="Officia minim nostrud in ipsum culpa reprehenderit magna in nulla labore dolore. Veniam est aliquip veniam labore ex aliqua consequat officia exercitation mollit exercitation deserunt. Ex irure eiusmod qui ad laboris labore sit in dolor excepteur. Nisi ea excepteur proident fugiat non. Exercitation dolore esse labore aliquip velit consequat ut voluptate id fugiat magna. Ea irure dolore ad occaecat eu minim dolor magna et occaecat deserunt ipsum. Laboris aliquip ad quis reprehenderit labore aliqua proident pariatur enim occaecat cillum officia mollit sint."
          />
          <ListRow
            question="Important Government Websites"
            anwser="Ullamco sunt anim ea cillum mollit proident adipisicing labore adipisicing ea fugiat sint nisi. Sint proident proident id ipsum culpa non ullamco dolore commodo. Est non amet qui elit deserunt labore ad minim. Commodo cillum elit amet excepteur sint magna amet voluptate consectetur ex eiusmod dolor. Fugiat amet reprehenderit proident veniam irure ullamco ad est nostrud reprehenderit nulla cillum."
          />
          <ListRow
            question="Local Organizations"
            anwser="Aute irure adipisicing nulla commodo consequat veniam do nulla. Sint minim aute cillum dolore fugiat sit id nostrud id et anim irure laborum voluptate. Dolor quis est veniam consequat voluptate sit deserunt consequat mollit duis. In ullamco ex tempor veniam qui sunt excepteur labore eu magna occaecat proident pariatur quis."
          />
        </div>
      </div>
    </div>
  );
}
