import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

export default function ProfilePage() {
  const { currentUser, updateProfile } = useApp()
  const [name, setName] = useState(currentUser?.name || '')
  const [course, setCourse] = useState(currentUser?.course || '')
  const [saved, setSaved] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    updateProfile({ name, course })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="page">
      <h1>Perfil</h1>
      <p className="page-subtitle">Edite suas informações.</p>

      <form className="card auth-form" onSubmit={handleSave} style={{ maxWidth: 420 }}>
        <label>
          Nome
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Curso
          <input value={course} onChange={(e) => setCourse(e.target.value)} />
        </label>
        <label>
          E-mail
          <input value={currentUser?.email} disabled />
        </label>
        <button className="btn btn-primary" type="submit">
          Salvar alterações
        </button>
        {saved && <div className="form-success">Perfil atualizado ✓</div>}
      </form>
    </div>
  )
}
