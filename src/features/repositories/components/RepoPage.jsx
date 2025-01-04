import { Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import EmptyState from "@/common/components/EmptyState.jsx";
import CustomPagination from "@/common/components/Pagination.jsx";
import Loading from "@/common/components/Loading.jsx";
import useFetchRepos from "../hooks/useFetchRepos.js";
import ReposList from "./ReposList.jsx";
import styles from "@/common/style/style.js";

export default function RepoPage() {
  const { reposLength, isLoading, error } = useSelector((state) => state.repos);
  const { screenName: userName } = useFetchRepos();
  const isEmpty = reposLength === 0;
  return (
    <Stack
      sx={{
        ...styles.container,
        padding: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{ ...styles.paper, minWidth: { md: 800, sm: "90%", xs: "90%" } }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          {userName} Public GitHub Repositories
        </Typography>
        {isLoading?.type === "reposLoading" && isLoading.loading ? (
          <Loading />
        ) : error ? (
          <Typography color="error" variant="h6">
            Error: {error}
          </Typography>
        ) : isEmpty ? (
          <EmptyState />
        ) : (
          <ReposList />
        )}
        {!isEmpty && <CustomPagination />}
      </Paper>
    </Stack>
  );
}
