import { Typography, Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <img
        src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif"
        alt="Running Octocat"
        style={{ width: 100, height: 100 }}
      />
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          color: "#6a737d",
        }}
      >
        One moment please...
      </Typography>
    </Box>
  );
}
