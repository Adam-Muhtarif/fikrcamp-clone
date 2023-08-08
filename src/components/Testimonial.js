import hussein from "./../images/student-1.png";

export default function Testimonial(params) {
  return (
    <div className="bg-yellow-500/20">
      <div className="container py-5 flex items-center justify-center space-x-5 md:w-4/5">
        <img
          src={hussein}
          className="w-[280px] h-[350px] border-4 border-white rounded hidden md:block drop-shadow-lg"
          alt="student-1"
        />
        <div className="">
          <h2 className="font-bold text-[25px]">
            Journey of <span className="text-primary">Hussein</span> to becoming
            a full stack developer in just 4 months
          </h2>
          <div className="border-l-2 border-primary pl-2 my-3">
            <p>
              <span className="font-bold text-[20px]">"</span>
              The Fikrcamps environment was really different, I like the sense
              of flexibility and the ability to engage with other people.
              Fikrcamp, on the other hand, did not place a high value on
              attendance or exercise delivery, but instead placed the entire
              burden of responsibility on the student, which was a big shift in
              mindset for me
              <span className="font-bold text-[20px]">"</span>
            </p>
          </div>
          <b>Hussein Mohamed</b>
        </div>
      </div>
    </div>
  );
}
