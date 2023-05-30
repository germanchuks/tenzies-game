import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import avatarData from './avatarData'
import TextField from '@mui/material/TextField';

import SelectAvatar from './SelectAvatar';

export default function CreatePlayerDialog(props) {
  
    const [isSelected, setIsSelected] = React.useState(avatarData)
    const [selectedAvatar, setSelectedAvatar] = React.useState('')
    const [newPlayerName, setNewPlayerName] = React.useState('')
    // const [gender, setGender] = React.useState('');

    const handlePlayerNameChange = (event) => {
      setNewPlayerName(event.target.value)
    }
    // const handleGenderChange = (event) => {
    //   setGender(event.target.value);
    // };

 
    function handleNewProfileSubmit() {

      props.setPlayerName(newPlayerName)
      props.setAvatarImage(selectedAvatar[0].img)
      console.log(selectedAvatar[0].img)
      props.handleClose()
    }

    // React.useEffect(() => {
      
    //   console.log(props.avatarImage)
    //   props.setAvatarImage(selectedAvatar)
    // }, [handleNewProfileSubmit, props, selectedAvatar])

  return (
    <div style ={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle>Create New Player</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <TextField type="text" value={newPlayerName} sx={{width:'100%'}} placeholder="Input Player Name" onChange={handlePlayerNameChange} />
            <FormControl fullWidth >                
                <span style={{paddingTop: '10px'}} id="avatar-label">Choose Avatar</span>
                <SelectAvatar 
                  selectedAvatar={selectedAvatar}
                  setSelectedAvatar={setSelectedAvatar}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  avatarImage={props.avatarImage}
                  setAvatarImage={props.setAvatarImage}
                  
                  />
                <section style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
                  <Button style={{width: '100%', }} onClick={handleNewProfileSubmit}>Save</Button>
                  <Button style={{width: '100%'}} onClick={props.handleClose}>Close</Button>   
                </section>          
            </FormControl>
          </Box>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}