export default function UpcomingCamp(props) {
  return (
    <div className="border-2 border-background bg-white p-5 flex flex-col space-y-2 w-[430px] m-2">
      <h2 className="font-extrabold">{props.camp.title}</h2>
      <p>{props.camp.description}</p>
      <p className="font-extrabold">{props.camp.startTime}</p>
      <div>
        <button className="border-2 border-primary text-primary rounded px-3 py-2 text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
