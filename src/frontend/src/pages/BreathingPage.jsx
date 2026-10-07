import { useEffect, useRef, useState } from 'react'
import { BREATHING_TRACKS } from '../data/mockData.js'

export default function BreathingPage() {
  const [selected, setSelected] = useState(BREATHING_TRACKS[0])
  const [running, setRunning] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(selected.pattern[0].seconds)
  const [totalElapsed, setTotalElapsed] = useState(0)
  const intervalRef = useRef(null)

  function resetTrack(track) {
    setSelected(track)
    setRunning(false)
    setPhaseIndex(0)
    setSecondsLeft(track.pattern[0].seconds)
    setTotalElapsed(0)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  function start() {
    setRunning(true)
  }

  function stop() {
    setRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    if (!running) return
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) return prev - 1
        setPhaseIndex((pIdx) => {
          const next = (pIdx + 1) % selected.pattern.length
          setSecondsLeft(selected.pattern[next].seconds)
          return next
        })
        return selected.pattern[0].seconds
      })
      setTotalElapsed((t) => {
        const next = t + 1
        if (next >= selected.durationSeconds) {
          clearInterval(intervalRef.current)
          setRunning(false)
        }
        return next
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [running, selected])

  const currentPhase = selected.pattern[phaseIndex]
  const progressPct = Math.min(100, Math.round((totalElapsed / selected.durationSeconds) * 100))

  return (
    <div className="page">
      <h1>Respiração guiada</h1>
      <p className="page-subtitle">Escolha uma trilha e siga o ritmo na tela.</p>

      <div className="breathing-grid">
        {BREATHING_TRACKS.map((track) => (
          <button
            key={track.id}
            className={'breathing-option' + (selected.id === track.id ? ' selected' : '')}
            onClick={() => resetTrack(track)}
            type="button"
          >
            <strong>{track.name}</strong>
            <span>{track.description}</span>
          </button>
        ))}
      </div>

      <div className="card breathing-player">
        <div className={'breathing-circle' + (running ? ' animate' : '')}>
          <span className="breathing-phase">{currentPhase.phase}</span>
          <span className="breathing-seconds">{secondsLeft}s</span>
        </div>
        <div className="breathing-progress-bar">
          <div className="breathing-progress-fill" style={{ width: progressPct + '%' }} />
        </div>
        <div className="breathing-controls">
          {!running ? (
            <button className="btn btn-primary" onClick={start}>
              {totalElapsed > 0 ? 'Continuar' : 'Iniciar'}
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={stop}>
              Pausar
            </button>
          )}
          <button className="btn btn-ghost" onClick={() => resetTrack(selected)}>
            Reiniciar
          </button>
        </div>
        {totalElapsed >= selected.durationSeconds && (
          <div className="form-success">Exercício concluído ✓</div>
        )}
      </div>
    </div>
  )
}
