import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomTooltip from "@/common/components/CustomTooltip.jsx";
import RepoComments from "../comments/components/ReposComment.jsx";
export default function ReposList() {
  const { reposList } = useSelector((state) => state.repos);
  const handleCopyCommand = (cloneCommand, repoName) => {
    navigator.clipboard.writeText(`git clone ${cloneCommand}`);
    toast.success(`Clone command copied to clipboard for: ${repoName} repo`);
  };
  return (
    <List>
      {reposList.map((repo) => (
        <ListItem
          key={repo.id}
          sx={{
            borderBottom: "1px solid #eee",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <ListItemText
            primary={repo.name}
            secondary={repo.description || "No description available"}
            primaryTypographyProps={{
              fontWeight: "bold",
            }}
          />
          <CustomTooltip
            title="Copy clone command"
            onClick={() => handleCopyCommand(repo.clone_url, repo.name)}
          >
            <ContentCopyIcon />
          </CustomTooltip>

          <RepoComments repo={repo} />
        </ListItem>
      ))}
    </List>
  );
}
