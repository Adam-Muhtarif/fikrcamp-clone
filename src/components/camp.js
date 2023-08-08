export default function Camp(props) {
  return (
    <div className="rounded-md shadow-md p-4">
      <h2 className="text-[19px] font-semibold pt-2 pb-5">
        {props.camp.title}
      </h2>
      <p>{props.camp.description}</p>
      {props.camp.available === true ? (
        <button className="bg-primary text-white capitalize px-3 py-2 rounded text-sm mt-3">
          {props.camp.buttonValue}
        </button>
      ) : (
        <button className="bg-backgroundGray text-white capitalize px-3 py-2 rounded text-sm mt-3">
          {props.camp.buttonValue}
        </button>
      )}
    </div>
  );
}
