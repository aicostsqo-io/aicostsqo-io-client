import * as React from "react";
// import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Typography from "@mui/material/Typography";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ContentCopy from "@mui/icons-material/ContentCopy";
import RemoveIcon from "@mui/icons-material/Remove";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import AddIcon from "@mui/icons-material/Add";
// import Cloud from "@mui/icons-material/Cloud";
import { useClickAway } from "@uidotdev/usehooks";
import { bulkDeleteRps } from "@/api/rp";
import { toast } from "react-toastify";
import { useTreeContext } from "@/contexts/Tree";

interface RPItemMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  rpName: string;
  rpId: string;
  onRefresh?: () => void;
}
export default function RPItemMenu({
  x,
  y,
  onClose,
  rpName,
  rpId,
  onRefresh,
}: RPItemMenuProps) {
  const { expanded, setExpanded, setPoint } = useTreeContext();
  const contextMenuRef = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  const handleDeleteRP = async () => {
    try {
      await bulkDeleteRps([rpId]);
      toast.success("RP deleted successfully");
      onRefresh && onRefresh();
    } catch (err) {
      toast.error("Failed to delete RP");
    }
    onClose();
  };

  const handleExpand = () => {
    // setExpanded([...expanded, rpId]);
    // console.log("expanded", expanded);
    onClose();
  };

  const handleCollapse = () => {
    // setExpanded(expanded.filter((id) => id !== rpId));
    onClose();
  };

  const handleCopyRP = () => {
    navigator.clipboard.writeText(rpId);
    toast.success("RP copied to clipboard");
    onClose();
  };

  return (
    <div
      className="absolute z-50"
      ref={contextMenuRef}
      style={{ top: `${y - 100}px`, left: `${x - 40}px` }}
    >
      <Paper
        sx={{
          width: 250,
          maxWidth: "100%",
        }}
      >
        <MenuList>
          {!rpName.startsWith("RP 0") ? (
            <>
              <MenuItem onClick={handleCopyRP}>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleDeleteRP}>
                <ListItemIcon>
                  <RemoveIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
              </MenuItem>
            </>
          ) : null}
          <MenuItem onClick={handleExpand}>
            <ListItemIcon>
              <UnfoldMoreIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Expand</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleCollapse}>
            <ListItemIcon>
              <UnfoldLessIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Collapse</ListItemText>
          </MenuItem>
          <MenuItem onClick={onClose}>
            <ListItemIcon>
              <DoDisturbAltIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cancel</ListItemText>
          </MenuItem>
          {/* <Divider />
          <MenuItem onClick={onClose}>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem> */}
        </MenuList>
      </Paper>
    </div>
  );
}
