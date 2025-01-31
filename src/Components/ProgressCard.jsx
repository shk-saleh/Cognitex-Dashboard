import React from "react"
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

const ProgressCard = ({ progressVal }) => (

  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
    <Gauge width={100} height={100} value={60} />
  </Stack>

)

export default ProgressCard