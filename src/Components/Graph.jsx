import React from 'react'

const Graph = () => {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-slate-800/50 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Customer Interaction Trends</h2>
                <select className="bg-slate-700 text-white px-3 py-1 rounded">
                <option>Week</option>
                <option>Month</option>
                <option>Year</option>
                </select>
            </div>
        </div>

      <div className="h-64">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#14B8A6" strokeWidth={2} dot={{ fill: '#14B8A6' }} />
          </LineChart>
      </div>

    </div>
  )
}

export default Graph