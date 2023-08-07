export default function Grads(params) {
  return (
    <div className="container">
      <h2 className="text-[30px] font-semibold leading-tight py-4">
        Meet our coding bootcamp grads
      </h2>
      <p>
        Coming from all walks of life, our graduates have something in common:
        they decided to learn to code to become autonomous and use their new
        skills to pursue their dreams.
      </p>
      <div className="flex flex-wrap py-4 ">
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
          <img
            src="//images.ctfassets.net/xiw1y0jyk767/4KWbzEP6VvTYpy4pQhqJUL/14aedaf4e253416e6c3a0e7c93fc11f3/Sara_J.jpg"
            alt="Sara J.jpg"
            className="h-[200px] w-full object-cover rounded drop-shadow-lg"
          />
          <h4 className="font-semibold pt-1 hover:text-primary">Sara Issa</h4>
          <h6 className="text-sm font-medium text-gray">
            Full Stack Developer @Systesa
          </h6>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
          <img
            src="//images.ctfassets.net/xiw1y0jyk767/6EXtgZrpXGb00pDZuz2KZc/c017fdf6d4c2fa87ba3471aa1bd85aed/IMG_0367.JPG"
            alt="IMG_0367.JPG"
            className="h-[200px] w-full object-cover rounded drop-shadow-lg"
          />
          <h4 className="font-semibold pt-1 hover:text-primary">
            Nim’an Bashir
          </h4>
          <h6 className="text-sm font-medium text-gray">
            Database Engineer @Telesom
          </h6>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
          <img
            src="//images.ctfassets.net/xiw1y0jyk767/7fdc776tDOotsioet2jHTP/0e67d2dfb19ea497aa3813bc7621ff91/20220620_122028.jpg"
            alt="20220620_122028.jpg"
            className="h-[200px] w-full object-cover rounded drop-shadow-lg"
          />
          <h4 className="font-semibold pt-1 hover:text-primary">
            Abdirisak Mohamed
          </h4>
          <h6 className="text-sm font-medium text-gray">Freelancer</h6>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
          <img
            src="//images.ctfassets.net/xiw1y0jyk767/1hKnogmkIHy3lOjMMEfDje/09c0aaa3495efc6e75e23e1d063ae506/student-1.JPG"
            alt="student-1.JPG"
            className="h-[200px] w-full object-cover rounded drop-shadow-lg"
          />
          <h4 className="font-semibold pt-1 hover:text-primary">
            Hussein Mohamed
          </h4>
          <h6 className="text-sm font-medium text-gray">
            Junior developer @somdigital
          </h6>
        </div>
      </div>
    </div>
  );
}
