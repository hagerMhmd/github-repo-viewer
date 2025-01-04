import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase.js";

export default function Layout() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Navbar user={user} />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
}
