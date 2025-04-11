'use client'

import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { v4 as uuid4 } from 'uuid'

export default function WeightTracker() {
  const [weight, setWeight] = useState('')
  const [data, setData] = useState<{ id: string, date: string, kg: number }[]>([])

  // Load from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('weightData')
    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }, [])

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('weightData', JSON.stringify(data))
  }, [data])

  const addWeight = () => {
    if (!weight) return
    setData(prev => [...prev, {
      id: uuid4(),
      date: new Date().toLocaleDateString(),
      kg: parseFloat(weight)
    }])
    setWeight('')
  }

  const deleteEntry = (id: string) => {
    setData(prev => prev.filter(entry => entry.id !== id))
  }

  return (
    <main className="mx-auto px-6 py-12 font-sans text-gray-100 bg-gray-900 min-h-screen">
      <div className="bg-gray-800 p-8 rounded-3xl shadow-lg text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 font-serif">Weight Loss Tracker</h1>
        <p className="text-lg text-gray-400">Tracking my daily progress and staying on course</p>
      </div>

      <div className="bg-gray-800 p-8 rounded-3xl shadow-lg mb-12">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight (kg)"
            className="w-full sm:w-auto px-6 py-4 border border-gray-500 bg-gray-700 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004182] shadow-md"
          />
          <button
            onClick={addWeight}
            className="bg-[#004182] hover:bg-[#00315f] text-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Add Entry
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-12">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#4b5563"/>
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis domain={['auto', 'auto']} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                borderRadius: '10px',
                backgroundColor: '#1f2937',
                border: '1px solid #9ca3af',
                color: '#fff'
              }}
              labelStyle={{ color: '#9ca3af' }}
              itemStyle={{ color: '#9ca3af' }}
            />
            <Line
              type="monotone"
              dataKey="kg"
              stroke="#004182"
              strokeWidth={3}
              dot={{ r: 5, fill: '#004182' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-6">
        {data.map(entry => (
          <div
            key={entry.id}
            className="flex justify-between items-center px-6 py-4 bg-gray-800 rounded-xl border border-gray-600 hover:border-[#004182] shadow-md hover:shadow-[#004182]/50 transition-all"
          >
            <span className="text-white font-medium">
              {entry.date}: <span className="text-gray-400">{entry.kg} kg</span>
            </span>
            <button
              onClick={() => deleteEntry(entry.id)}
              className="text-sm text-red-500 hover:text-red-600 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
