import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export function MaxDialogBag({ isOpen, doClose, hour, schedule, page }) {
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
              {hour
                ? "Horário excluido com sucesso!"
                : schedule
                ? "Agendamento excluido com sucesso!"
                : page === 6
                ? "Dados alterados com sucesso !"
                : "Bolsa excluida com sucesso!"}
            </h1>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
