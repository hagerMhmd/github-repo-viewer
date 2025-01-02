import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { auth, provider } from "../../../services/firebase.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAuth = () => {
  const navigate = useNavigate();
  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = GithubAuthProvider.credentialFromResult(result);
      const githubAccessToken = credential.accessToken;
      Cookies.set("accessToken", githubAccessToken);
      Cookies.set("userInfo", JSON.stringify(user.reloadUserInfo));
      navigate("/");
      return user;
    } catch (error) {
      toast.error(error);
    }
  };

  return { loginWithGithub };
};
