import { Avatar } from "@mui/material";
import Cookies from "js-cookie";
import { avatarPlaceHolder } from "@/services/constant.js";

export default function UserAvatar() {
  const userInfoCookie = Cookies.get("userInfo");
  const user = userInfoCookie ? JSON.parse(userInfoCookie) : undefined;
  return <Avatar sx={{ mr: 1 }} src={user?.photoUrl || avatarPlaceHolder} />;
}
