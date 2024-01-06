import PropTypes from "prop-types";

const Title = ({ children, className }) => {
  return (
    <h1
      className={`sm:text-4xl text-[26px] border-b-4 dark:text-text_color_dark border-secondary_color w-max font-semibold ${className}`}
    >
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Title;
