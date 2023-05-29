import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/Help';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import LogoutIcon from '@mui/icons-material/Logout';
import SelectPlayerDialog from './SelectPlayerDialog';
import LevelDialog from './LevelDialog';
import HelpDialog from './HelpDialog';
import ExitDialog from './ExitDialog';
import ScoresDialog from './ScoresDialog';

export default function MenuButton(props) {

  //MENU DIALOGS
  
  //Prop States
  const [playerOpen, setPlayerOpen] = React.useState(false);
  const [levelOpen, setLevelOpen] = React.useState(false);
  const [scoresOpen, setScoresOpen] = React.useState(false); 
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [exitOpen, setExitOpen] = React.useState(false);
  

 //Close Dialog Commands 
  const handlePlayerClose = () => {
    setPlayerOpen(false);
  };
  const handleLevelClose = () => {
    setLevelOpen(false);
  };
  const handleScoresClose = () => {
    setScoresOpen(false);
  };
  const handleHelpClose = () => {
    setHelpOpen(false);
  };
  const handleExitClose = () => {
    setExitOpen(false);
  };
  

  //Open Dialog Command
  const callDialog = event => {
    if (event.currentTarget.id === 'Exit') {
        setExitOpen(true);
      } else if (event.currentTarget.id === 'Select Player') {
        setPlayerOpen(true)
      } else if (event.currentTarget.id === 'Difficulty') {
        setLevelOpen(true)
      } else if (event.currentTarget.id === 'Scoreboard') {
        setScoresOpen(true)
      } else if (event.currentTarget.id === 'How to Play') {
        setHelpOpen(true) 
      }
  }

  //Dialog Lists
  const menuDialogs = (
    <>
      <SelectPlayerDialog 
        handleClose={handlePlayerClose} 
        open={playerOpen} 
        playerName={props.playerName} 
        setPlayerName={props.setPlayerName}
        avatarImage={props.avatarImage}
        setAvatarImage={props.setAvatarImage} />
      <LevelDialog handleClose={handleLevelClose} open={levelOpen}/>
      <ScoresDialog handleClose={handleScoresClose} open={scoresOpen}/>
      <HelpDialog  handleClose={handleHelpClose} open={helpOpen}/>
      <ExitDialog handleClose={handleExitClose} open={exitOpen}/>
    </>
  )


  //MENU BAR
  const menu = <MenuIcon />
  const menuItems = [
    {name: 'Select Player', logo: <PeopleIcon />},
    {name: 'Difficulty', logo: <DisplaySettingsIcon />},
    {name: 'Scoreboard', logo: <ScoreboardIcon />},
    {name: 'How to Play', logo: <HelpIcon />}
  ]
  const [state, setState] = React.useState({
    left: false,
    
  });


  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ height:'100%',
      width: 220,
      fontFamily: "sans-serif",
      fontSize: 2,
      bgcolor: "white",
    }}
      fontSize={0.2}
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        {menuItems.map((text) => (

          <ListItem key={text.name} id={text.name} disablePadding>
            <ListItemButton id={text.name} onClick = {callDialog}>
              <ListItemIcon>{text.logo}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
      <List style={{
        position: 'absolute',
        bottom: '5px',
        width: '100%',
        
      }}>
          <ListItem key={'Exit Game'} disablePadding>
            <ListItemButton id={'Exit'} onClick= {callDialog}>
              <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
              <ListItemText primary={'Exit Game'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          {menuDialogs}
          <Button onClick={toggleDrawer('menu', true)}>{menu}</Button>
          <Drawer
            anchor={'left'}
            open={state['menu']}
            onClose={toggleDrawer('menu', false)}
          >
            {list('menu')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}