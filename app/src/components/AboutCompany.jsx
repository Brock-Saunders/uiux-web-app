import soj from "../assets/scales-of-justice-silver.png";

export default function AboutCompany() {
  return (
    <div className="flex w-full bg-beige text-gray-700 pt-32 pb-32">
      <div className="mx-auto px-16 max-w-7xl w-full relative ">
        <div className="grid grid-cols-2 divide-x-2 divide-gray-700">
          <div>
            <div className="px-24 my-32 text-5xl font-serif">
              Helping to Overcome and Ease The Legal Burden
            </div>
          </div>
          <div className="w-full my-14">
            <img className="w-96 mx-auto shadow-xl" src={soj} />
          </div>
        </div>
        <div className="mr-24 ml-24 mt-14 ml-auto text-justify space-y-5 w-full max-w-4xl">
          <p>
            Est consectetur exercitation quis esse reprehenderit qui ea
            cupidatat enim ea nulla labore. Laboris eu consectetur qui nostrud
            veniam id do anim exercitation occaecat non ullamco labore
            exercitation. Tempor velit occaecat aliquip voluptate aliquip ad
            veniam commodo id duis eu. Anim commodo ullamco non aliqua labore do
            tempor mollit qui do enim nisi.
          </p>
          <p>
            Exercitation tempor sit dolore consequat. Sunt ullamco magna ullamco
            minim do elit sint et officia quis exercitation dolor quis. Magna
            consequat anim officia occaecat qui nisi labore in deserunt ea
            cillum nulla culpa aliqua. Nisi veniam incididunt amet nostrud velit
            ut velit ut. Minim reprehenderit quis exercitation nostrud sunt
            reprehenderit magna fugiat fugiat. Ullamco cillum fugiat ex fugiat.
          </p>
        </div>
      </div>
    </div>
  );
}
