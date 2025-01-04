import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Button, Paper, Typography } from "@mui/material";
import styles from "@/common/style/style.js";
import { useAuth } from "../hooks/useAuth.js";

export default function Login() {
  const { loginWithGithub } = useAuth();
  return (
    <Box sx={styles.container}>
      <Paper elevation={10} sx={styles.paper}>
        <GitHubIcon sx={styles.icon} />
        <Typography variant="h4" sx={styles.heading}>
          Welcome to GitHub Auth
        </Typography>
        <Typography variant="body1" sx={styles.subHeading}>
          Log in to access your repositories
        </Typography>
        <Button
          variant="contained"
          sx={styles.button}
          onClick={loginWithGithub}
        >
          <GitHubIcon sx={{ mr: 1 }} />
          Login with GitHub
        </Button>
      </Paper>
    </Box>
  );
}
