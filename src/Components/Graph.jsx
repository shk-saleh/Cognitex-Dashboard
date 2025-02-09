import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
];


const Graph = () => {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-3 my-6 w-[800px]">

      <div className="lg:col-span-2 bg-[#142124b2] px-6 pb-12 pt-8 rounded-xl">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-normal">Customer Interaction Trends</h2>
            <select className="border-2 rounded-lg border-[#5f949cb2] bg-[#1c3033b2] text-gray-200 p-2">
              <option>Week</option>
              <option>Month</option>
              <option>Year</option>
            </select>
        </div>
        <div className="h-[250px]">
          <BarChart
            width={500}
            height={290}
            series={[
              { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
              { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            sx={{
              [`& .MuiChartsAxis-tickLabel`]: { fill: '#ffff !important' },
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Graph