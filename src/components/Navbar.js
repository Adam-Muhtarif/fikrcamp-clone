import { useState } from "react";
import logo from "./../images/fikr.png";
import Link from "./Link";

export default function Navbar(params) {
  let [links, setLinks] = useState([
    "Courses",
    "Success Stories",
    "Hire Grads",
    "Free Webinars",
  ]);

  return (
    <div className="py-3 shadow-md bg-white">
      {/* this empty div for test */}
      <div onClick={setLinks}></div>
      <div className="md:hidden container flex items-center justify-between ">
        <div>
          <img src={logo} alt="logo" className="w-40" />
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          className="hover:cursor-pointer"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </div>
      <div className="hidden md:flex container items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-40 cursor-pointer" />
        </div>
        <div>
          <ul className="flex space-x-6 items-center ">
            {links.map((link, i) => (
              <Link key={i} link={link} />
            ))}
            <li>
              <a
                href="https://forms.office.com/r/nsherhEZ4s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary text-white px-4 py-3 rounded text-sm font-semibold">
                  APPLY NOW
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
