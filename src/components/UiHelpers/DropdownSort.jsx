import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropdownSort = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Table filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          ref={ref}
        >
          <MenuItem value={1}>Member</MenuItem>
          <MenuItem value={2}>Non-Member</MenuItem>
          <MenuItem value={3}>level(Highest to Lowest)</MenuItem>
          <MenuItem value={4}>level(Lowest to Highest)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownSort;
