import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function LoginPage() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const result = login(email, password)
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
        <p className="auth-tagline">Seu espaço para respirar entre uma prova e outra.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              required
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              required
            />
          </label>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </form>
        <p className="auth-footer">
          Ainda não tem conta? <Link to="/cadastro">Criar conta</Link>
        </p>
        <div className="auth-demo">
          <strong>Contas de demonstração</strong>
          <div>Estudante: estudante@respira.com / 123456</div>
          <div>Admin: admin@respira.com / admin123</div>
        </div>
      </div>
    </div>
  )
}
