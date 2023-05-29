import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';


export default function HelpDialog(props) {

  return (
    <React.Fragment>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle>How to Play</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
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
                <Button onClick={props.handleClose}>Close</Button>             
            </FormControl>
          </Box>
        </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
}