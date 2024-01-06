import PropTypes from "prop-types";

const ButtonPrimary = ({ className, children, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} disabled:bg-base-300 disabled:hover:border-transparent  disabled:hover:text-neutral disabled:scale-100 disabled:cursor-not-allowed px-3 py-1 sm:px-[32px] sm:py-[10px] rounded bg-secondary_color/60 dark:text-text_color_dark text-text_color_normal font-semibold text-lg border-transparent border-[2px] duration-200 hover:border-secondary_color dark:hover:text-secondary_color hover:text-secondary_color hover:bg-transparent active:scale-95 shadow-drop-center`}
    >
      {children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonPrimary;
