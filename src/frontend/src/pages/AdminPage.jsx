import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

const emptyForm = { title: '', tags: '', summary: '', content: '' }

export default function AdminPage() {
  const { library, updateLibrary } = useApp()
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  function startEdit(item) {
    setEditingId(item.id)
    setForm({ title: item.title, tags: item.tags.join(', '), summary: item.summary, content: item.content })
  }

  function cancelEdit() {
    setEditingId(null)
    setForm(emptyForm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const payload = {
      title: form.title,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      summary: form.summary,
      content: form.content,
    }
    if (editingId) {
      updateLibrary(library.map((item) => (item.id === editingId ? { ...item, ...payload } : item)))
    } else {
      updateLibrary([...library, { id: 'l' + Date.now(), ...payload }])
    }
    cancelEdit()
  }

  function remove(id) {
    updateLibrary(library.filter((item) => item.id !== id))
    if (editingId === id) cancelEdit()
  }

  return (
    <div className="page">
      <h1>Painel administrativo</h1>
      <p className="page-subtitle">Gerencie o conteúdo da biblioteca de bem-estar (RF08).</p>

      <form className="card auth-form" onSubmit={handleSubmit}>
        <h3>{editingId ? 'Editar conteúdo' : 'Novo conteúdo'}</h3>
        <label>
          Título
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        </label>
        <label>
          Tags (separadas por vírgula)
          <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
        </label>
        <label>
          Resumo
          <input value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} required />
        </label>
        <label>
          Conteúdo completo
          <textarea rows={3} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
        </label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" type="submit">
            {editingId ? 'Salvar alterações' : 'Adicionar conteúdo'}
          </button>
          {editingId && (
            <button className="btn btn-ghost" type="button" onClick={cancelEdit}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="library-grid">
        {library.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className="tag-row">
              {item.tags.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button className="btn btn-secondary" type="button" onClick={() => startEdit(item)}>
                Editar
              </button>
              <button className="btn btn-ghost" type="button" onClick={() => remove(item.id)}>
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
