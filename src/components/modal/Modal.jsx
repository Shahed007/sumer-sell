import PropTypes from "prop-types";

const Modal = ({ open, handleOpen, children }) => {
  return (
    <>
      <div
        className={`h-full w-full fixed top-0 cursor-pointer left-0 duration-500 transition-all  flex items-center ${
          open ? "scale-100" : "scale-0"
        }`}
      >
        <div
          onClick={handleOpen}
          className={`absolute top-0 left-0 w-full h-full bg-gray-700/50 duration-200 ${
            open ? "scale-100" : "scale-0 "
          }`}
        ></div>
        <div className="max-w-xl cursor-auto h-[380px] border shadow-sm relative overflow-auto w-full mx-4 bg-white sm:mx-auto rounded-md p-4  mt-20">
          <button
            onClick={handleOpen}
            className="absolute right-2 top-2 active:scale-95"
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  children: PropTypes.node,
};
