import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import ButtonPrimary from "../button/ButtonPrimary";
import { Link } from "react-router-dom";
const Card = ({ popular }) => {
  const { _id, service_provider_name, image, service_name, services } =
    popular || [];

  return (
    <div data-aos="fade-up" data-aos-duration="5000" className="rounded-md shadow-md relative dark:bg-gray-900 backdrop-blur-md bg-text_color_dark/20 dark:text-text_color_dark">
      <img
        src={services.service_image}
        alt={`photo of ${service_provider_name}`}
        className="object-cover object-center w-full rounded-t-md h-36 sm:h-52"
      />
      <div className="flex flex-col justify-between p-4 ">
        <div className="space-y-2 border-b border-gray-200 pb-2 flex justify-between items-center">
          <figure className="flex gap-3 items-center ">
            <img
              src={image}
              className="shadow-drop-center h-11 w-11 rounded-full border-4 border-secondary_color object-cover"
              alt=""
            />
            <figcaption className="font-semibold">
              {service_provider_name}
            </figcaption>
          </figure>
          <div className=" text-orange-200 absolute top-2 right-4 ">
            <div className="bg-gray-600/70 flex text-center gap-2 p-2 rounded-sm">
              <div className="flex items-center ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-base font-medium">{services.rating}</p>
            </div>
          </div>
          <h1 className="text-4xl font-medium text-center mb-4 text-secondary ">
            {services.price}
          </h1>
        </div>
        <div className="mt-3 mb-6">
          <h3 className="text-2xl mb-2 font-semibold">{service_name}</h3>
          <p className="text-base hidden sm:block">{services?.description.slice(0, 100)}...</p>
          <p className="text-base sm:hidden block">{services?.description.slice(0, 40)}..</p>
        </div>

        <Link to={`/serviceDetails/${_id}`} className="w-full block">
          <ButtonPrimary className="flex justify-center items-center hover:bg-transparent w-full">
            Details
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  popular: PropTypes.object.isRequired,
};

export default Card;
