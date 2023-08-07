import somdigital from "./../images/somdigital.png";
import sahaltech from "./../images/sahaltech.png";
import wayeel from "./../images/wayeel.png";
import gts from "./../images/gts.png";

export default function Partners() {
  return (
    <div className="container py-5">
      <h2 className="text-[30px] font-semibold leading-tight text-center py-5">
        Local Hiring Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <img src={somdigital} className="h-[70px] m-2" />
        <img src={sahaltech} className="h-[45px] m-2" />
        <img src={wayeel} className="h-[100px] m-2" />
        <img src={gts} className="h-[45px] m-2" />
      </div>
    </div>
  );
}
