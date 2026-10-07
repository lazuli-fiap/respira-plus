import { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

export default function LibraryPage() {
  const { library } = useApp()
  const [activeTag, setActiveTag] = useState('all')
  const [query, setQuery] = useState('')

  const allTags = useMemo(() => {
    const set = new Set()
    library.forEach((item) => item.tags.forEach((t) => set.add(t)))
    return ['all', ...Array.from(set)]
  }, [library])

  const filtered = library.filter((item) => {
    const matchesTag = activeTag === 'all' || item.tags.includes(activeTag)
    const matchesQuery =
      !query || item.title.toLowerCase().includes(query.toLowerCase()) || item.summary.toLowerCase().includes(query.toLowerCase())
    return matchesTag && matchesQuery
  })

  return (
    <div className="page">
      <h1>Biblioteca de conteúdos</h1>
      <p className="page-subtitle">Conteúdos curtos sobre bem-estar, pensados para a rotina acadêmica.</p>

      <input
        className="search-input"
        placeholder="Buscar por título ou tema..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="tag-filter">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={'tag-chip' + (activeTag === tag ? ' active' : '')}
            onClick={() => setActiveTag(tag)}
            type="button"
          >
            {tag === 'all' ? 'Todos' : tag}
          </button>
        ))}
      </div>

      <div className="library-grid">
        {filtered.map((item) => (
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
            <details>
              <summary>Ler mais</summary>
              <p>{item.content}</p>
            </details>
          </div>
        ))}
        {filtered.length === 0 && <p>Nenhum conteúdo encontrado.</p>}
      </div>
    </div>
  )
}
