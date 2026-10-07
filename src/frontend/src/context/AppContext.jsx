import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  SEED_USERS,
  SEED_MOOD_ENTRIES,
  SEED_LIBRARY,
  SEED_REMINDERS,
} from '../data/mockData.js'

const AppContext = createContext(null)

const KEYS = {
  users: 'respira_users',
  session: 'respira_session',
  moods: 'respira_moods',
  library: 'respira_library',
  reminders: 'respira_reminders',
}

function safeGet(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage indisponível (ex.: sandbox) — segue só em memória
  }
}

function safeRemove(key) {
  try {
    window.localStorage.removeItem(key)
  } catch {
    // ignore
  }
}

export function AppProvider({ children }) {
  const [users, setUsers] = useState(() => safeGet(KEYS.users, SEED_USERS))
  const [moodEntries, setMoodEntries] = useState(() => safeGet(KEYS.moods, SEED_MOOD_ENTRIES))
  const [library, setLibrary] = useState(() => safeGet(KEYS.library, SEED_LIBRARY))
  const [reminders, setReminders] = useState(() => safeGet(KEYS.reminders, SEED_REMINDERS))
  const [currentUser, setCurrentUser] = useState(() => {
    const session = safeGet(KEYS.session, null)
    if (!session) return null
    const seeded = safeGet(KEYS.users, SEED_USERS)
    return seeded.find((u) => u.id === session.userId) || null
  })

  useEffect(() => safeSet(KEYS.users, users), [users])
  useEffect(() => safeSet(KEYS.moods, moodEntries), [moodEntries])
  useEffect(() => safeSet(KEYS.library, library), [library])
  useEffect(() => safeSet(KEYS.reminders, reminders), [reminders])

  function login(email, password) {
    const user = users.find((u) => u.email === email && u.password === password)
    if (!user) return { ok: false, error: 'E-mail ou senha inválidos' }
    safeSet(KEYS.session, { userId: user.id })
    setCurrentUser(user)
    return { ok: true }
  }

  function logout() {
    safeRemove(KEYS.session)
    setCurrentUser(null)
  }

  function register({ name, email, password, course }) {
    if (users.some((u) => u.email === email)) {
      return { ok: false, error: 'Já existe uma conta com esse e-mail' }
    }
    const newUser = {
      id: 'u' + Date.now(),
      name,
      email,
      password,
      role: 'student',
      course: course || '',
    }
    setUsers((prev) => [...prev, newUser])
    safeSet(KEYS.session, { userId: newUser.id })
    setCurrentUser(newUser)
    return { ok: true }
  }

  function addMoodEntry({ mood, note }) {
    if (!currentUser) return
    const today = new Date().toISOString().slice(0, 10)
    setMoodEntries((prev) => {
      const userEntries = prev[currentUser.id] || []
      const withoutToday = userEntries.filter((e) => e.date !== today)
      return {
        ...prev,
        [currentUser.id]: [...withoutToday, { date: today, mood, note: note || '' }].sort((a, b) =>
          a.date.localeCompare(b.date),
        ),
      }
    })
  }

  function updateReminders(next) {
    setReminders(next)
  }

  function updateProfile(fields) {
    if (!currentUser) return
    setUsers((prev) => prev.map((u) => (u.id === currentUser.id ? { ...u, ...fields } : u)))
    setCurrentUser((prev) => ({ ...prev, ...fields }))
  }

  function updateLibrary(next) {
    setLibrary(next)
  }

  const value = {
    currentUser,
    users,
    moodEntries: currentUser ? moodEntries[currentUser.id] || [] : [],
    library,
    reminders,
    login,
    logout,
    register,
    addMoodEntry,
    updateReminders,
    updateProfile,
    updateLibrary,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp precisa estar dentro de AppProvider')
  return ctx
}
