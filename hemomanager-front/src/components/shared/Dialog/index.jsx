import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export function MaxDialog({ isOpen, isClose, doClose }) {
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
          <h1> Bem vindo !</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h1>Login Efetuado com sucesso!</h1>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={isClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
