import { Search } from "react-feather";
import Navbar from "./Navbar";
import Locations from "../data/dummy";

import CustomDropdown from "../Components/CustomDropDown";

const Header = ({ selectedOption, setSelectedOption }) => {
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
 

  return (
    <div className="relative w-full border border-black">
      <div className="absolute inset-0 bg-black opacity-50 object-cover"></div>
      <div className="relative">
        <Navbar />
        <div className="absolute inset-0 flex justify-center items-center mt-56 ">
          <h1 className=" text-4xl md:text-7xl lg:text-8xl font-anta md:text-green-500 text-lime-200">
            DROP MY ORDER
          </h1>
        </div>
      </div>
      <img
        className="w-full h-[28rem] object-cover object-bottom filter z-10 "
        src="https://imgur.com/E0Rdb6v.png"
        alt="Docplanner "
        style={{ loading: "lazy" }}
      />

      <div className="absolute inset-0 flex justify-center items-center mt-[15rem] ">
        <div className="mx-4 md:mx-auto lg:w-full w-full max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-4 bg-lime-50 rounded-lg shadow-lg">
            <CustomDropdown
              options={Locations.map((location) => ({
                label: location.name,
                value: location.id,
              }))}
              selectedOption={selectedOption}
              setSelectedOption={(option) => handleOptionSelect(option)}
            />
            <div className="flex items-center justify-between w-full px-2 border border-gray-300 rounded-lg py-2">
              <input
                type="text"
                placeholder={
                  selectedOption
                    ? `Selected ${
                        Locations.find(
                          (location) => location.id === selectedOption
                        )?.name
                      }`
                    : "Search Your Location"
                }

                className="w-full md:w-11/12 p-2  focus:outline-none focus:border-none bg-lime-50 font-Signika text-lg"
              />
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
