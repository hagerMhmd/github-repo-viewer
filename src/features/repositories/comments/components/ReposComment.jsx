import PropTypes from "prop-types";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ViewComments from "./ViewComment.jsx";
import AddComment from "./AddComment.jsx";
import { toggleCommentsModal } from "@/redux/modules/modal/Actions.js";
import CustomTooltip from "@/common/components/CustomTooltip.jsx";

export default function RepoComments({ repo }) {
  const dispatch = useDispatch();
  const { isCommentModalOpen, selectedCommentRepoId } = useSelector(
    (state) => state.modal
  );
  const comments = JSON.parse(localStorage.getItem("repoComments") || "{}");
  const repoId = repo.id;
  const hasComments = comments[repoId];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {hasComments ? (
        <CustomTooltip
          title="View comments"
          onClick={() => dispatch(toggleCommentsModal(repoId))}
        >
          <RemoveRedEyeIcon />
        </CustomTooltip>
      ) : (
        <CustomTooltip
          title="Add Comment"
          onClick={(event) => handleClick(event, repoId)}
        >
          <AddCircleOutlineIcon />
        </CustomTooltip>
      )}
      {hasComments && (
        <ViewComments
          open={isCommentModalOpen && selectedCommentRepoId === repoId}
          handleClose={() => dispatch(toggleCommentsModal())}
          repoId={repoId}
          comments={comments}
          repo={repo}
        />
      )}
      {!hasComments && (
        <AddComment
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          handleClose={handleClose}
          repoId={repoId}
        />
      )}
    </>
  );
}

RepoComments.propTypes = {
  repo: PropTypes.object.isRequired,
};
