import { Button, Menu, Stack, TextField } from "@mui/material";
import PropTypes from "prop-types";
import UserAvatar from "@/common/components/UserAvatar.jsx";
import { useAddComment } from "../hooks/useAddComment.js";
import styles from "@/common/style/style.js";

const commentStyles = {
  menu: {
    paper: {
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        width: { lg: "30%", md: "40%", xs: "60%" },
        "& .MuiAvatar-root": {
          ...styles.icon,
          mr: 1,
        },
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    },
  },
  form: {
    width: "100%",
  },
  textField: {
    mb: 1,
  },
  submitButton: {
    ...styles.button,
    p: 1,
    fontWeight: "normal",
  },
};
export default function AddComment({ anchorEl, open, handleClose, repoId }) {
  const { formik, handleSubmit } = useAddComment(repoId, handleClose);
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: commentStyles.menu.paper,
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Stack direction="column" sx={{ padding: 2 }}>
        <UserAvatar />
        <form onSubmit={handleSubmit} style={commentStyles.form}>
          <TextField
            type="text"
            placeholder="Add a comment"
            name={String(repoId)}
            value={formik.values[repoId]}
            onChange={formik.handleChange}
            sx={commentStyles.textField}
            fullWidth
            multiline
            rows={5}
          />
          <Button
            type="submit"
            variant="contained"
            sx={commentStyles.submitButton}
          >
            Submit
          </Button>
        </form>
      </Stack>
    </Menu>
  );
}

AddComment.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  repoId: PropTypes.number.isRequired,
};
