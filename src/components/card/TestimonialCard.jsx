import PropTypes from "prop-types";

import { AiFillStar } from "react-icons/ai";

const TestimonialCard = ({ image, name, rating, days, description }) => {
  return (
    <div className="container shadow-drop-center h-[250px] sm:h-[220px] flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-4   ">
        <div className="flex space-x-4">
          <div>
            <img
              src={image}
              alt={name}
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm">{name}</h4>
            <span className="text-xs dark:text-gray-400">{days}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
          <AiFillStar />
          <span className="text-xl font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-4 flex-1 grow  text-sm text-justify dark:text-text_color_dark">
        <p>{description.slice(0, 205)}...</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

TestimonialCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.string,
  description: PropTypes.string,
  days: PropTypes.string,
};
