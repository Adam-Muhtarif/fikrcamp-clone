export default function Hire() {
  return (
    <div className=" py-10 flex justify-center items-center bg-blue-200/40">
      <div className="rounded-lg md:p-10 flex justify-center ">
        <div className="md:w-3/4 text-center">
          <h2 className="text-[30px] font-black leading-tight py-4">
            Hire a bootcamp <span className="text-blue-600/90">graduate.</span>
          </h2>
          <p>
            Our graduates are taken through a project-based learning approach
            which combines both theoretical knowledge with practical real-life
            applications.
          </p>
          <a
            href="https://forms.office.com/r/REZWy5pdbq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-blue-600/90 text-blue-600/90 rounded px-3 py-2 text-sm mt-3">
              Hire graduate
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
