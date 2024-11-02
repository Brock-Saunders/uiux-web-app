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
            Ad deserunt aliquip proident cupidatat magna tempor laborum est
            laboris id aliqua. Deserunt eu laboris minim sunt. Tempor commodo
            deserunt pariatur deserunt mollit magna exercitation. Commodo
            cupidatat eu ea aute irure cupidatat ullamco laboris velit duis ad
            mollit dolore. Enim est ipsum voluptate aliqua magna et enim irure
            enim proident eiusmod eiusmod in.
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
            description="Ut eiusmod ea id ex. Non sint elit enim ea. Nulla labore quis elit sit consectetur excepteur sunt ipsum commodo quis aliquip anim. Laboris cupidatat magna consequat ea irure mollit reprehenderit ad quis enim. Non adipisicing nulla culpa excepteur est tempor anim qui nulla consequat."
          />
          <Quad
            title="Legal Experience"
            description="Aliqua velit ea adipisicing id excepteur qui. Do do qui consequat velit sunt tempor. Sint enim officia pariatur qui nisi laborum reprehenderit culpa ipsum est. Laboris adipisicing ea irure ex sint sint dolor do minim eiusmod irure fugiat fugiat. Cillum sit occaecat deserunt ullamco consequat."
          />
          <Quad
            title="Recognition"
            description="Quis commodo sunt enim veniam exercitation dolor enim. Aliqua do cillum fugiat tempor non laborum. Elit esse qui fugiat laborum culpa culpa consectetur ex consectetur officia nulla. Et sunt dolore esse quis pariatur deserunt ad officia ex laborum reprehenderit irure culpa."
          />
          <Quad
            title="Community"
            description="Officia Lorem ut in irure irure laborum ea cillum eiusmod reprehenderit veniam veniam. Sunt est sint ipsum adipisicing non labore in eu reprehenderit ex velit. Exercitation non aliqua ut proident."
          />
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
