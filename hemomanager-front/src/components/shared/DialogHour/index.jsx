import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useState } from "react";

export function MaxDialogHour({ isOpen, isClose, doClose, page }) {
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
            <h1>
              {page === 1
                ? "Dados pessoais alterados com sucesso !"
                : page === 2
                ? "Agedamento cancelado com sucesso!"
                : "Horário agendado com sucesso!"}
            </h1>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={isClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
