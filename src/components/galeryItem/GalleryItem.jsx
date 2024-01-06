import PropTypes from "prop-types";

import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const GalleryItem = ({ img, name }) => {
  return (
    <div className="h-full w-full group relative overflow-hidden cursor-pointer ">
      <img
        className="h-full w-full object-cover duration-500 transition-transform lg:group-hover:scale-125"
        src={img}
        alt=""
      />
      <div className="bg-gray-600/40 absolute top-0 left-0 w-full h-full lg:-translate-x-full duration-300 transition-all lg:group-hover:translate-x-0"></div>
      <div className="absolute top-0 left-0 w-full h-full lg:-translate-x-full duration-700 flex flex-col gap-4 justify-end s pb-8 lg:justify-center items-center transition-all lg:group-hover:translate-x-0">
        <h4 className=" text-white font-semibold text-2xl">{name}</h4>
        <div className="flex gap-2 items-center">
          <a href="#">
            <FaFacebook className="text-4xl text-white" />
          </a>
          <a href="#">
            <FaInstagramSquare className="text-4xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

GalleryItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default GalleryItem;
