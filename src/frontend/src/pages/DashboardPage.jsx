import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { MOODS } from '../data/mockData.js'

export default function DashboardPage() {
  const { currentUser, moodEntries, reminders } = useApp()
  const today = new Date().toISOString().slice(0, 10)
  const todayEntry = moodEntries.find((e) => e.date === today)
  const lastEntries = [...moodEntries].slice(-5).reverse()
  const activeReminders = reminders.filter((r) => r.active)

  return (
    <div className="page">
      <h1>Olá, {currentUser?.name?.split(' ')[0]} 👋</h1>
      <p className="page-subtitle">Diferente de apps genéricos de meditação, o Respira+ fala a língua da rotina acadêmica.</p>

      <div className="card-grid">
        <div className="card">
          <h3>Humor de hoje</h3>
          {todayEntry ? (
            <div className="mood-today">
              <span className="mood-emoji-big">{MOODS.find((m) => m.value === todayEntry.mood)?.emoji}</span>
              <span>{MOODS.find((m) => m.value === todayEntry.mood)?.label}</span>
            </div>
          ) : (
            <p>Você ainda não registrou seu humor hoje.</p>
          )}
          <Link to="/app/humor" className="btn btn-secondary">
            {todayEntry ? 'Atualizar registro' : 'Registrar humor'}
          </Link>
        </div>

        <div className="card">
          <h3>Respiração guiada</h3>
          <p>Tire 2 a 5 minutos pra respirar antes da próxima aula ou prova.</p>
          <Link to="/app/respiracao" className="btn btn-secondary">
            Começar exercício
          </Link>
        </div>

        <div className="card">
          <h3>Lembretes ativos</h3>
          {activeReminders.length === 0 ? (
            <p>Nenhum lembrete ativo.</p>
          ) : (
            <ul className="simple-list">
              {activeReminders.slice(0, 3).map((r) => (
                <li key={r.id}>
                  {r.time} — {r.text}
                </li>
              ))}
            </ul>
          )}
          <Link to="/app/lembretes" className="btn btn-secondary">
            Ver todos
          </Link>
        </div>

        <div className="card">
          <h3>Últimos registros</h3>
          {lastEntries.length === 0 ? (
            <p>Nenhum registro ainda.</p>
          ) : (
            <ul className="simple-list">
              {lastEntries.map((e) => (
                <li key={e.date}>
                  {e.date} — {MOODS.find((m) => m.value === e.mood)?.emoji}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
