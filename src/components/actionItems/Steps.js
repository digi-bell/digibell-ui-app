import * as React from 'react';
import Divider from '@mui/material/Divider';
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
    </React.Fragment>
  )};
  