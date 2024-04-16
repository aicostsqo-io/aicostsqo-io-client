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
import { getExportedMagnetometrics } from "@/api/magnetometric";
import { getExcel } from "@/api/excel";

interface MagnetometryMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  siteId: string;
}
export default function MagnetometryMenu({
  x,
  y,
  onClose,
  siteId,
}: MagnetometryMenuProps) {
  const contextMenuRef = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  const handleExportMagnetometries = async () => {
    try {
      const response = await getExportedMagnetometrics(siteId);
      const { success, result } = response.data;
      if (success) {
        getExcel(result);
      }
      toast.success("Magnetometries exported successfully");
    } catch (err) {
      toast.error("Failed to export Magnetometries data");
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
          <MenuItem onClick={handleExportMagnetometries}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export Magnetometries</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
