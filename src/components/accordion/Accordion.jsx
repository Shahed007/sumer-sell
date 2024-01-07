import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ title, description, id }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <div className="mb-4">
      <input
        type="checkbox"
        id={`accordion-item-${id}`}
        className="hidden"
        checked={activeAccordion === id}
        onChange={() => toggleAccordion(id)}
      />
      <label
        htmlFor={`accordion-item-${id}`}
        className="cursor-pointer text-sm sm:text-base font-bold bg-white border shadow-sm rounded-md p-2 flex transition duration-300 justify-between items-center "
      >
        {title}
        {activeAccordion === id ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </label>
      <div
        className={`overflow-hidden max-h-0 transition-all duration-700 shadow-sm border rounded-b-sm ${
          activeAccordion === id ? "max-h-screen" : ""
        }`}
      >
        <div className="p-4 text-justify">{description}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Accordion;
