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

export default function MenuButton() {
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((text) => (

          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.logo}
              </ListItemIcon>
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
            <ListItemButton>
              <ListItemIcon>
                {<LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={'Exit Game'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {/* {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}
        <React.Fragment key={'menu'}>
          <Button onClick={toggleDrawer('menu', true)}>{menu}</Button>
          <Drawer
            anchor={'menu'}
            open={state['menu']}
            onClose={toggleDrawer('menu', false)}
          >
            {list('menu')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}