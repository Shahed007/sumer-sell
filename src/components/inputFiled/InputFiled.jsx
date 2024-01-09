import PropTypes from "prop-types";
const InputFiled = ({
  type,
  name,
  placeholder,
  required,
  defaultValue,
  readOnly,
}) => {
  return (
    <div className="h-11 relative">
      <input
        required={required}
        type={type}
        name={name}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className="peer h-full w-full block border-b darK:bg-dark_component dark:text-white  bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-secondary_color focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-sm px-2"
        placeholder=" "
      />
      <label className="after:content[' '] dark:text-white pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-secondary_color after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-secondary_color peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
        {placeholder}
      </label>
    </div>
  );
};

InputFiled.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default InputFiled;
