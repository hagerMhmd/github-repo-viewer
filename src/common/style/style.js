const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    p: 4,
    mx: { md: 4, sm: 2, xs: 3 },
    maxWidth: 400,
    textAlign: "center",
    borderRadius: "15px",
    backgroundColor: "white",
  },
  icon: {
    fontSize: 60,
    color: "#333",
    mb: 2,
  },
  heading: {
    fontWeight: "bold",
    mb: 2,
  },
  subHeading: {
    mb: 3,
    color: "gray",
  },
  button: {
    backgroundColor: "#333",
    color: "white",
    py: 1.5,
    px: { md: 4 },
    fontSize: { md: "16px", xs: "13px" },
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#444",
    },
  },
};

export default styles;
