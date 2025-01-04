import { Typography, Box } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export default function EmptyState() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <SentimentDissatisfiedIcon
        sx={{ fontSize: 100, color: "#a0a0a0", marginBottom: 2 }}
      />
      <Typography
        variant="h5"
        sx={{
          color: "#555",
          marginBottom: 1,
        }}
      >
        Oops! Nothing to see here.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#777",
          marginBottom: 3,
        }}
      >
        Looks like the data went on vacation. 🏖️
      </Typography>
    </Box>
  );
}

