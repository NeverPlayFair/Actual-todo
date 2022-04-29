import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" name="pomoc" {...bindTrigger(popupState)}>
            Instrukcja
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>

              Kliknij ikonkę z napisem tak, żeby zatwierdzić zadanie.

              Kliknij ikonkę z napisem usuń, żeby odrzucić zadanie.

              Kliknij ikonkę z napisem edytuj, żeby edytować.

            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
