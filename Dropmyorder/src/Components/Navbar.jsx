import "../App.css";

const Navbar = () => {
  return (
    <div className="absolute inset-0 wrapper flex justify-between py-5 px-5 bg-transparent">
      <div className="flex">
        <p className=" text-3xl font-Signika font-bold text-lime-100	">
          Drop It
          <p className=" text-3xl font-Signika font-bold text-lime-100	">We Deliver It</p>
        </p>
      </div>

      <div className="flex font-Signika gap-11 mr-28">
        <p className="text-2xl text-lime-100">Login</p>
        <p className="text-2xl text-lime-100">Signup</p>
      </div>
    </div>
  );
};

export default Navbar;
