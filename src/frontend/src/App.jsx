import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { RequireAuth, RequireAdmin } from './components/RouteGuards.jsx'
import LoginPage from './pages/LoginPage.jsx'
import CadastroPage from './pages/CadastroPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import MoodPage from './pages/MoodPage.jsx'
import BreathingPage from './pages/BreathingPage.jsx'
import LibraryPage from './pages/LibraryPage.jsx'
import RemindersPage from './pages/RemindersPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import AdminPage from './pages/AdminPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route
          path="/app"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="humor" element={<MoodPage />} />
          <Route path="respiracao" element={<BreathingPage />} />
          <Route path="biblioteca" element={<LibraryPage />} />
          <Route path="lembretes" element={<RemindersPage />} />
          <Route path="perfil" element={<ProfilePage />} />
          <Route
            path="admin"
            element={
              <RequireAdmin>
                <AdminPage />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  )
}
