import React from "react"
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const ProgressCard = ({ progressVal }) => (

  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
    <Gauge width={100} height={100} value={progressVal} 
    sx={(theme) => ({
      [`& .${gaugeClasses.valueArc}`]: {
        fill: '#396268',  
      },
      [`& .${gaugeClasses.referenceArc}`]: {
        fill: '#2b4241',
      },
      [`& text.${gaugeClasses.valueText}`]: {
        fontSize: 16,
        fill: '#2b4241',
      },
    })}/>
  </Stack>

)

export default ProgressCard