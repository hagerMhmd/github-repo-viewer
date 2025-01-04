import { Button } from "@mui/material";
import Cookies from "js-cookie";
import useLogout from "../hooks/useLogout.js";

const Logout = () => {
  const { loading, signOutUser } = useLogout();
  const accessToken = Cookies.get("accessToken");

  const handleSignOut = () => {
    signOutUser();
  };

  if (!accessToken) {
    return null;
  }

  return (
    <Button
      sx={{ bgcolor: "secondary.main", color: "white", fontWeight: "500" }}
      onClick={handleSignOut}
      disabled={loading}
    >
      {loading ? "Signing Out..." : "Sign Out"}
    </Button>
  );
};

export default Logout;
