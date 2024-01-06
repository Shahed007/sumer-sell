import { useState } from "react";

import PropTypes from "prop-types";

const Accordion = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShow(!show)}
        className={`shadow-sm border dark:bg-dark_component dark:text-white  p-2 rounded-md text-sm sm:text-base font-semibold flex items-center gap-2 justify-between ${
          show && "rounded-b-none"
        }`}
        style={{ cursor: "pointer" }}
      >
        <h1>{title}</h1>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
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
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </div>
      <p
        style={{
          maxHeight: show ? "100%" : "0px",
          opacity: show ? 1 : 0,
          display: show ? "block" : "none",
        }}
        className={` p-2 text-base font-normal border-t shadow-sm transition-all duration-200 dark:bg-dark_component dark:text-white`}
      >
        {description}
      </p>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Accordion;
