import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Switch from '@mui/material/Switch';

export default function ExitDialog(props) {

  return (
    <React.Fragment>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle>Exit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can still beat best scores and top the scoreboard. Are you sure you want to exit?
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '100%',
            }}
          >
            <FormControl sx={{ minWidth: 120, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '5px'}}>
                <Button >Yes</Button>
                <Button onClick={props.handleClose}>Cancel</Button>             
            </FormControl>
          </Box>
        </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
}