import { useState } from "react";
import arrow from "../assets/arrow.png";

export default function ListRow({ question, anwser }) {
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
