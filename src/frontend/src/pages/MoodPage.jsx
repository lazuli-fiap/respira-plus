import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useApp } from '../context/AppContext.jsx'
import { MOODS } from '../data/mockData.js'

export default function MoodPage() {
  const { moodEntries, addMoodEntry } = useApp()
  const today = new Date().toISOString().slice(0, 10)
  const todayEntry = moodEntries.find((e) => e.date === today)
  const [mood, setMood] = useState(todayEntry?.mood || 3)
  const [note, setNote] = useState(todayEntry?.note || '')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    addMoodEntry({ mood, note })
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const chartData = moodEntries.map((e) => ({ date: e.date.slice(5), humor: e.mood }))

  return (
    <div className="page">
      <h1>Diário de humor</h1>
      <p className="page-subtitle">Como você está se sentindo hoje?</p>

      <div className="card">
        <div className="mood-picker">
          {MOODS.map((m) => (
            <button
              key={m.value}
              className={'mood-option' + (mood === m.value ? ' selected' : '')}
              onClick={() => setMood(m.value)}
              type="button"
              aria-label={m.label}
            >
              <span className="mood-emoji">{m.emoji}</span>
              <span className="mood-label">{m.label}</span>
            </button>
          ))}
        </div>
        <label className="mood-note-label">
          Nota (opcional)
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Como foi seu dia?" />
        </label>
        <button className="btn btn-primary" onClick={handleSave}>
          Salvar registro de hoje
        </button>
        {saved && <div className="form-success">Registrado ✓</div>}
      </div>

      <div className="card">
        <h3>Evolução do humor</h3>
        {chartData.length === 0 ? (
          <p>Ainda não há registros suficientes para o gráfico.</p>
        ) : (
          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="date" stroke="#6B7280" fontSize={12} />
                <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} stroke="#6B7280" fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="humor" stroke="#5FB3B3" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}
