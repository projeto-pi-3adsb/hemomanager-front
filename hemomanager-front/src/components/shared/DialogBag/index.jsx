import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export function MaxDialogBag({ isOpen, doClose }) {
  
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isOpen}
        onClose={doClose}
      >
        <DialogTitle>
          <h1>Sucesso!</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h1>Excluída com sucesso!</h1>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
