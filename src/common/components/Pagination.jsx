import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useThemePalette } from "../hooks/useThemePalette.js";

export default function CustomPagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { numberOfPages } = useSelector((state) => state.repos);
  const selectetPageNumber = +searchParams.get("page") || 1;
  const { primary } = useThemePalette();
  const handlePageChange = (_, value) => {
    setSearchParams({ page: value.toString() });
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
      <Pagination
        count={numberOfPages}
        page={selectetPageNumber}
        onChange={handlePageChange}
        shape="rounded"
        variant="outlined"
        sx={{
          "& .Mui-selected": {
            backgroundColor: `${primary} !important`,
            color: "white",
          },
          "& .Mui-selected:hover": {
            backgroundColor: "primary.dark",
            borderColor: "primary.main !important",
          },
          "& .MuiPaginationItem-root": {
            borderColor: "grey.400",
          },
        }}
      />
    </Stack>
  );
};

