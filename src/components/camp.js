export default function Camp(props) {
  return (
    <div className="rounded-md shadow-md p-4">
      <h2 className="text-[19px] font-semibold pt-2 pb-5">
        {props.camp.title}
      </h2>
      <p>{props.camp.description}</p>
      {props.camp.available === true ? (
        <button className="bg-blue-600/90 text-white capitalize px-3 py-2 rounded text-sm mt-3">
          {props.camp.buttonValue}
        </button>
      ) : (
        <button className="bg-gray-500/80 text-white capitalize px-3 py-2 rounded text-sm mt-3">
          {props.camp.buttonValue}
        </button>
      )}
    </div>
  );
}
