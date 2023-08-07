import hassan from "./../images/hassan.png";
import hussein from "./../images/hussein.png";
import sara from "./../images/sara.png";
export default function Landing() {
  return (
    <div className="Landing bg-slate-50">
      <div className="container grid md:grid-cols-2 gap-4 py-10 bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center text-center md:text-left pattern-yh  ">
          <h3 className="text-[40px] font-pans font-bold my-5 leading-[50px]">
            Learn a new skill <span className="text-blue-600/90">today</span>.
            Stand out from the rest.
          </h3>
          <p className="text-lg">
            Become a full stack developer in just 16 weeks with the assistance
            of expert instructors and mentors!!
          </p>
          <p className="font-semibold my-3 ">
            100% Somali Content | Qualified Instructors | Community
          </p>
          <div>
            <button className=" bg-blue-600/90  text-white px-7 py-4 rounded text-sm font-bold mr-2">
              Browse Camps
            </button>
          </div>
        </div>
        <div className="hidden md:block ">
          <div className="hidden md:block ">
            <div className="grid grid-rows-2 items-center grid-cols-4 grid-flow-col gap-4">
              <div className="row-span-2 col-span-2">
                <img className=" rounded-lg" src={hassan} alt="banner" />
              </div>
              <div className="col-span-2">
                <img className=" rounded-lg" src={hussein} alt="banner" />
              </div>
              <div className="col-span-2 ">
                <img className=" rounded-lg" src={sara} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
