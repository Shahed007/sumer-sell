import PropTypes from "prop-types";
const InputFiled = ({ type, name, placeholder, required }) => {
  return (
    <input
      required={required}
      type={type}
      name={name}
      placeholder={placeholder}
      className="text-black w-full focus-within:bg-transparent focus:bg-transparent font-montserrat px-2 py-2 shadow-sm border rounded-md focus-within:outline-secondary_color"
    />
  );
};

InputFiled.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputFiled;
