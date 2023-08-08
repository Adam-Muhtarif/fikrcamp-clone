import { useState } from "react";
import UpcomingCamp from "./UpcomingCamp";

export default function Upcoming() {
  let [upComingCamps, setUpComingCamps] = useState([
    {
      title: "Web development - Batch-107",
      description:
        "Learn JavaScript and build a career in code with our accelerated Full Stack course.",
      startTime: "March 25th, 2022",
    },
    {
      title: "Web development - Batch-108",
      description:
        "Learn JavaScript and build a career in code with our accelerated Full Stack course.",
      startTime: "March 25th, 2022",
    },
  ]);

  return (
    <div className="container py-5">
      <h2 className="text-[30px] font-semibold leading-tight text-center pb-5">
        Upcoming <span className="text-primary">Bootcamps</span>
      </h2>
      <div className="flex justify-center flex-wrap">
        {upComingCamps.map((camp,i) => (
          <UpcomingCamp key={i} camp={camp} />
        ))}
      </div>
    </div>
  );
}
