import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function ProfileAvatar(props) {
  return (
    <Stack direction="row" spacing={2}>
      
      <Avatar src={props.avatarImage} />
    </Stack>
  );
}