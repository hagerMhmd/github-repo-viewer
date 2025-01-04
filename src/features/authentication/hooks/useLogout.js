import { useState } from "react";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { auth } from "../../../services/firebase";
import { resetReposData } from "../../../redux/modules/repo/Actions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      Cookies.remove("accessToken");
      Cookies.remove("userInfo");
      dispatch(resetReposData());
      navigate("/login");
    } catch (error) {
      console.log(error?.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    signOutUser,
  };
};

export default useLogout;
