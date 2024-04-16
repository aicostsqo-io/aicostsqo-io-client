import * as React from "react";
// import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
// import Cloud from "@mui/icons-material/Cloud";
import { useClickAway } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
import { getExcel } from "@/api/excel";
import { getExportedJointSets } from "@/api/jointSet";

interface JointSetsMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  siteId: string;
}
export default function JointSetsMenu({
  x,
  y,
  onClose,
  siteId,
}: JointSetsMenuProps) {
  const contextMenuRef = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  const handleExportJointSets = async () => {
    try {
      const response = await getExportedJointSets(siteId);
      const { success, result } = response.data;
      if (success) {
        getExcel(result);
      }
      toast.success("Joint Sets exported successfully");
    } catch (err) {
      toast.error("Failed to export Joint Sets data");
    }
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
          <MenuItem onClick={handleExportJointSets}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export Joint Sets</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
