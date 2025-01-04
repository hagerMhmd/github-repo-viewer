import { Tooltip, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const CustomTooltip = ({ title, children, onClick, ...props }) => {
  return (
    <Tooltip title={title} arrow {...props}>
      <IconButton onClick={onClick}>{children}</IconButton>
    </Tooltip>
  );
};

CustomTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default CustomTooltip;
