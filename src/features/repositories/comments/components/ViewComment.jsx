import { Box, Modal, Typography, Divider, Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import UserAvatar from "@/common/components/UserAvatar.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "50%", xs: "70%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function ViewComments({ open, handleClose, comments, repo }) {
  const repoId = repo.id;
  const comment = comments[repoId];
  const user = JSON.parse(Cookies.get("userInfo"));
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="view-comments-title"
      aria-describedby="view-comments-description"
    >
      <Box sx={style}>
        <Typography variant="h6" id="view-comments-title" sx={{ mb: 2 }}>
          Comment for Repository {repo.name}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={2}>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <UserAvatar />
            <Box
              sx={{
                overflowY: "auto",
                maxHeight: "50vh",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {user.screenName}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {comment}
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

ViewComments.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  repo: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
};
