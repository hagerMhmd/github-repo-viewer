import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>404: Page Not Found!</h3>
      <p style={styles.message}>
        Oops! This page doesn&apos;t exist, but don&apos;t worry, we&apos;ve got
        you covered.
      </p>
      <img
        src="https://media0.giphy.com/media/lqFHf5fYMSuKcSOJph/200.webp?cid=790b761109d7rz0clrq7wtn8t144hja8ng4lgvs6bqeaf9b6&ep=v1_gifs_search&rid=200.webp&ct=g"
        alt="Funny Dancing Robot"
        style={styles.image}
      />
      <p style={styles.homeLink}>
        <button onClick={() => navigate("/")} style={styles.link}>
          Click here to go back home
        </button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#f44336",
  },
  message: {
    fontSize: "1.1rem",
    color: "#4caf50",
  },
  image: {
    maxWidth: "400px",
    marginTop: "30px",
    borderRadius: "10px",
  },
  homeLink: {
    marginTop: "30px",
    fontSize: "1.2rem",
    color: "#007bff",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default NotFound;
