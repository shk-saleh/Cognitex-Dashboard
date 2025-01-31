import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const Range = ({progressValue}) => {
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        aria-label="Range"
        defaultValue={progressValue}
        getAriaValueText={progressValue}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
  )
}

export default Range
