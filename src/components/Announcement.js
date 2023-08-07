import { useState } from "react";

export default function Announcement() {
  let [ad, setAd] = useState(
    "🎉 Cohort 5 registration ongoing limited seats apply now! 🎉"
  );
  return <div className="text-center bg-blue-600/90 py-3 text-white">{ad}</div>;
}
