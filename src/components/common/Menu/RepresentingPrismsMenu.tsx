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
import { getExportedRps } from "@/api/rp";
import axios from "axios";
import { getExcel } from "@/api/excel";

interface RepresentingPrismsMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  siteBoundId: string;
}
export default function RepresentingPrismsMenu({
  x,
  y,
  onClose,
  siteBoundId,
}: RepresentingPrismsMenuProps) {
  const contextMenuRef = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  const handleExportRPs = async () => {
    try {
      const response = await getExportedRps(siteBoundId);
      const { success, result } = response.data;
      if (success) {
        getExcel(result);
      }
      toast.success("RP(s) exported successfully");
    } catch (err) {
      toast.error("Failed to export RP(s)");
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
          <MenuItem onClick={handleExportRPs}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export RP(s)</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
