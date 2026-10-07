import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

export default function RemindersPage() {
  const { reminders, updateReminders } = useApp()
  const [text, setText] = useState('')
  const [time, setTime] = useState('08:00')

  function addReminder(e) {
    e.preventDefault()
    if (!text.trim()) return
    updateReminders([...reminders, { id: 'r' + Date.now(), text, time, active: true }])
    setText('')
  }

  function toggle(id) {
    updateReminders(reminders.map((r) => (r.id === id ? { ...r, active: !r.active } : r)))
  }

  function remove(id) {
    updateReminders(reminders.filter((r) => r.id !== id))
  }

  return (
    <div className="page">
      <h1>Lembretes</h1>
      <p className="page-subtitle">Configure lembretes gentis para cuidar de si ao longo do dia.</p>

      <form className="card inline-form" onSubmit={addReminder}>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <input
          placeholder="Ex: Beber água antes da próxima aula"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ flex: 1 }}
        />
        <button className="btn btn-primary" type="submit">
          Adicionar
        </button>
      </form>

      <div className="reminder-list">
        {reminders.map((r) => (
          <div className="card reminder-item" key={r.id}>
            <div>
              <strong>{r.time}</strong> — {r.text}
            </div>
            <div className="reminder-actions">
              <label className="switch">
                <input type="checkbox" checked={r.active} onChange={() => toggle(r.id)} />
                <span>{r.active ? 'Ativo' : 'Inativo'}</span>
              </label>
              <button className="btn btn-ghost" onClick={() => remove(r.id)} type="button">
                Remover
              </button>
            </div>
          </div>
        ))}
        {reminders.length === 0 && <p>Nenhum lembrete configurado.</p>}
      </div>
    </div>
  )
}
