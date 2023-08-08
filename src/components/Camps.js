import { useState } from "react";
import Camp from "./Camp";

export default function Camps() {
  let [camps, setCamps] = useState([
    {
      title: "Development Camp",
      description:
        "Learn the ins and outs of becoming a full fullstack developer with the ability to create real world applications.",
      buttonValue: "View Camp",
      available: true,
    },
    {
      title: "Product Design Camp",
      description:
        "Learns how to bring your design to real life by learning design thinking, UI/UX, wireframes and much more.",
      buttonValue: "Coming Soon",
      available: false,
    },
    {
      title: "Product Management Camp",
      description:
        "Get hands on experience on have to manage, develop and ship a product to your end users effectively.",
      buttonValue: "Coming Soon",
      available: false,
    },
  ]);

  return (
    <div className="camps container py-12">
      <h2 className="text-[30px] font-pans font-semibold leading-tight text-center">
        Our web and Ui/Ux camps
      </h2>
      <p className="text-center">
        You can choose the career path you like to launch your career in tech
        &amp; design.
      </p>
      <div className="flex justify-center py-5">
        <div className="grid md:grid-cols-5 grid-cols-3 gap-5">
          <div className="flex m-auto items-center">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="text-secondary"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <p className="font-semibold pl-1">Mentorship</p>
          </div>
          <div className="flex m-auto md:justify-start items-center">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="text-secondary"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <p className="font-semibold pl-1">Online</p>
          </div>
          <div className="flex m-auto items-center">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="text-secondary"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <p className="font-semibold pl-1">Zoom Sessions</p>
          </div>
          <div className="flex m-auto items-center">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="text-secondary"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <p className="font-semibold pl-1">Q/A sessions</p>
          </div>
          <div className="flex items-center m-auto">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="text-secondary"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <p className="font-semibold pl-1">Somali</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10 my-8">
        {camps.map((camp, i) => {
          return <Camp key={i} camp={camp} />;
        })}
      </div>
    </div>
  );
}
