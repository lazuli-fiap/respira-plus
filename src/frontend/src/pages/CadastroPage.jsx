import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function CadastroPage() {
  const { register } = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const result = register({ name, email, password, course })
    if (!result.ok) {
      setError(result.error)
      return
    }
    navigate('/app')
  }

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <Logo size={36} />
        <h1 className="auth-title">Criar conta</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Nome
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            E-mail
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Curso (opcional)
            <input value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Ex: Engenharia de Software" />
          </label>
          <label>
            Senha
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={4} />
          </label>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Criar conta e entrar
          </button>
        </form>
        <p className="auth-footer">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </div>
  )
}
