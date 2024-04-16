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
import { getExportedScanlines } from "@/api/scanline";
import { getExcel } from "@/api/excel";

interface ScanlineMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  siteId: string;
}
export default function ScanlineMenu({
  x,
  y,
  onClose,
  siteId,
}: ScanlineMenuProps) {
  const contextMenuRef = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  const handleExportScanlines = async () => {
    try {
      const response = await getExportedScanlines(siteId);
      const { success, result } = response.data;
      if (success) {
        getExcel(result);
      }
      toast.success("Seismics exported successfully");
    } catch (err) {
      toast.error("Failed to export Seismic");
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
          <MenuItem onClick={handleExportScanlines}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export Seismics</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
