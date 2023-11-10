import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import { Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ListItem, TextField } from '@mui/material';
import {Actionstep} from './Actionstep'

export const Steps =()=>{ 
    const [action, setAction] = React.useState('');
    const [typeValue, setTypeValue] = React.useState("");
  const handleChange = (event) => {
    setAction(event.target.value);
    setTypeValue(event.target.value);
  };

    return (
    <React.Fragment>
     <ListItem>
      <Actionstep handleChange={handleChange} action={action}/>
     </ListItem>
     
     {typeValue === "click" ? (
      <ListItem>
        <TextField fullWidth size="small" label="Click"></TextField>
      </ListItem>) 
     : typeValue === "fill" ? (<>
      <ListItem>
        <TextField fullWidth size="small" label="Field"></TextField>
      </ListItem>
      <ListItem>
        <TextField fullWidth size="small" label="Value"></TextField>
      </ListItem>
     </>) 
     : typeValue === "wait" ? (<>
     <ListItem>
      <TextField fullWidth size="small" label="Time"></TextField>
     </ListItem>
     </>) 
     : typeValue === "display" ? (<>
     <ListItem>
      <TextField fullWidth size="small" label="Message"></TextField>
     </ListItem>
     </>)
      : (<>
      <ListItem>
        <TextField fullWidth size="small" label="Field"></TextField>
      </ListItem>
      </>)}
      <Divider sx={{ my: 1 }} />
      {/* <ListItemButton fullWidth href='/'>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sidebar Icon 2" />
      </ListItemButton>
      <ListItemButton href='/'>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sidebar Icon 3" />
      </ListItemButton>
      <ListItemButton href='/'>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sidebar Icon 4" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} /> */}
    </React.Fragment>
  )};
  