import { useState } from 'react';
import { motion } from 'framer-motion';

const CustomDropdown = ({ options ,selectedOption, setSelectedOption}) => {
 
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown visibility
  };

  return (
    <div className="relative w-full md:w-80">
      <div className="relative">
        <div
          className="w-full md:w-80 flex justify-between items-center p-2 border border-gray-300 rounded-lg cursor-pointer py-4 font-Signika text-lg"
          onClick={toggleDropdown} // Toggle the dropdown on click
        >
          <span>
            {selectedOption
              ? options.find((option) => option.value === selectedOption)?.label
              : "Select a Location"}
          </span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {isOpen && ( // Render the dropdown only when isOpen is true
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-48 overflow-y-auto" // Set a fixed height and enable scrolling for the dropdown
          >
            {options.map((option) => (
              <motion.div
                key={option.value}
                className="p-2 cursor-pointer font-Signika text-2xl"
                whileHover={{ backgroundColor: "#3CB371", color: "#fff" }}
                onClick={() => handleOptionSelect(option.value)}
              >
                {option.label}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
