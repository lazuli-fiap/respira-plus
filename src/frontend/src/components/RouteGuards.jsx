import { Navigate, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export function RequireAuth({ children }) {
  const { currentUser } = useApp()
  const location = useLocation()
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export function RequireAdmin({ children }) {
  const { currentUser } = useApp()
  if (!currentUser) return <Navigate to="/login" replace />
  if (currentUser.role !== 'admin') return <Navigate to="/app" replace />
  return children
}
