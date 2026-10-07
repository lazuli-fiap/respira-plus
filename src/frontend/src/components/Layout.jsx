import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useApp } from '../context/AppContext.jsx'

const NAV_ITEMS = [
  { to: '/app', label: 'Início', end: true },
  { to: '/app/humor', label: 'Diário de humor' },
  { to: '/app/respiracao', label: 'Respiração' },
  { to: '/app/biblioteca', label: 'Biblioteca' },
  { to: '/app/lembretes', label: 'Lembretes' },
  { to: '/app/perfil', label: 'Perfil' },
]

export default function Layout() {
  const { currentUser, logout } = useApp()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="app-sidebar-top">
          <Logo />
        </div>
        <nav className="app-nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => 'app-nav-link' + (isActive ? ' active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
          {currentUser?.role === 'admin' && (
            <NavLink to="/app/admin" className={({ isActive }) => 'app-nav-link' + (isActive ? ' active' : '')}>
              Painel admin
            </NavLink>
          )}
        </nav>
        <div className="app-sidebar-bottom">
          <div className="app-user-chip">{currentUser?.name}</div>
          <button className="btn btn-ghost" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
