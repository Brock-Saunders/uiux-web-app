import { useState } from "react";
import arrow from "../assets/arrow.png";

export default function ListRow({ question, answer, isOpen, toggleDropdown }) {
  return (
    <div>
      <div className="w-full flex items-center">
        <div className="text-xl font-serif">{question}</div>
        <div className="ml-auto hover:opacity-50 cursor-pointer">
          <img
            onClick={toggleDropdown}
            src={arrow}
            className={`w-5 ${isOpen && "rotate-180"}`}
          />
        </div>
      </div>
      {isOpen && <p className="mt-5">{answer}</p>}{" "}
    </div>
  );
}
