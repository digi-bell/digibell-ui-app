import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export const Actionstep =({handleChange,action})=> {

  return(
    <FormControl fullWidth>
        <InputLabel size="small" id="demo-simple-select-label">Action</InputLabel>
        <Select
          size="small"
          labelId="Action"
          id="demo-simple-select"
          value={action} 
          label="Action"
          onChange={handleChange}
        >
          <MenuItem value={"click"}>Click</MenuItem>
          <MenuItem value={"fill"}>Fill</MenuItem>
          <MenuItem value={"select"}>Select</MenuItem>
          <MenuItem value={"wait"}>Wait</MenuItem>
          <MenuItem value={"display"}>Display</MenuItem>
        </Select>
      </FormControl>
  )

}



