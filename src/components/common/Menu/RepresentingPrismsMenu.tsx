import React, { useState, useEffect } from "react";
// import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
// import Cloud from "@mui/icons-material/Cloud";
import { useClickAway } from "@uidotdev/usehooks";
import { toast } from "react-toastify";
import { copyPasteRp, getExportedRps } from "@/api/rp";
import axios from "axios";
import { getExcel } from "@/api/excel";
import { useRouter } from "next/router";
import { useSiteContext } from "@/contexts/Site";

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
  const router = useRouter();
  const contextMenuRef = useClickAway<HTMLDivElement>(() => {
    onClose();
  });
  const { mutate } = useSiteContext();

  const [clipboardText, setClipboardText] = useState<string>("");

  useEffect(() => {
    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText();
        setClipboardText(text);
      } catch (error) {
        console.error("Failed to read clipboard: ", error);
      }
    };

    const intervalId = setInterval(checkClipboard, 1000);
    checkClipboard();

    return () => clearInterval(intervalId);
  }, []);

  const handleAddNewRP = () => {
    console.log("Add New RP");
    router.push(`/project/add-manually?addRP=1`);
    onClose();
  };

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

  const handlePasteRP = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        copyPasteRp(siteBoundId, { rpId: text })
          .then((response) => {
            if (response.data.success) {
              toast.success("RP pasted successfully");
              mutate();
            }
          })
          .catch((err) => {
            toast.error("Failed to paste RP");
          });
      })
      .catch((err) => {
        console.error("Failed to read clipboard: ", err);
      })
      .finally(() => {
        onClose();
      });
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
              <FileUploadIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export RP(s)</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleAddNewRP}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add New RP</ListItemText>
          </MenuItem>
          <MenuItem onClick={handlePasteRP} disabled={!clipboardText}>
            <ListItemIcon>
              <ContentPasteGoIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste RP</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
