import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const AlertProvider = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        closeOnClick
      />
      {children}
    </>
  );
};
AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlertProvider;
