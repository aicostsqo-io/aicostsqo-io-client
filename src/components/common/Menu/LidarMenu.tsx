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
import { getExportedLidars } from "@/api/lidar";

interface LidarMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  siteId: string;
}
export default function LidarMenu({ x, y, onClose, siteId }: LidarMenuProps) {
  const contextMenuRef = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  const handleExportLidars = async () => {
    try {
      const response = await getExportedLidars(siteId);
      const { success, result } = response.data;
      if (success) {
        getExcel(result);
      }
      toast.success("Lidars exported successfully");
    } catch (err) {
      toast.error("Failed to export Lidars data");
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
          <MenuItem onClick={handleExportLidars}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export Lidars</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
