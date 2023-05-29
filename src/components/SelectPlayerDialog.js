import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import CreatePlayerDialog from './CreatePlayerDialog';
// import Switch from '@mui/material/Switch';

export default function SelectPlayerDialog(props) {
    
    //CREATE NEW PLAYER DIALOG
    const [newPlayerOpen, setNewPlayerOpen] = React.useState(false);
    
    function openCreateDialog() {
        setNewPlayerOpen(true);
    }

    const newPlayerClose = () => {
        setNewPlayerOpen(false);
      };

  return (
    <React.Fragment>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle>Select Player</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </DialogContentText> */}
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '500px',
              height: '200px'
            }}
          >
            <FormControl sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '5px'}}>
                <Button onClick={openCreateDialog}>Create New Player</Button>
                <CreatePlayerDialog 
                  handleClose={newPlayerClose} 
                  open={newPlayerOpen} 
                  playerName={props.playerName} 
                  setPlayerName={props.setPlayerName}
                  avatarImage={props.avatarImage}
                  setAvatarImage={props.setAvatarImage} />
                <Button onClick={props.handleClose}>Close</Button>             
            </FormControl>
          </Box>
        </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
}