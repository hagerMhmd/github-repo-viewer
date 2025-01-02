import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertProvider = (Props) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      {Props.children}
    </>
  );
};

export default AlertProvider;
