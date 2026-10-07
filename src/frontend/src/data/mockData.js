export const SEED_USERS = [
  {
    id: 'u1',
    name: 'Estudante Demo',
    email: 'estudante@respira.com',
    password: '123456',
    role: 'student',
    course: 'Engenharia de Software',
  },
  {
    id: 'u2',
    name: 'Admin Demo',
    email: 'admin@respira.com',
    password: 'admin123',
    role: 'admin',
    course: 'Coordenação',
  },
]

export const MOODS = [
  { value: 1, emoji: '😞', label: 'Péssimo' },
  { value: 2, emoji: '😕', label: 'Ruim' },
  { value: 3, emoji: '😐', label: 'Neutro' },
  { value: 4, emoji: '🙂', label: 'Bem' },
  { value: 5, emoji: '😄', label: 'Ótimo' },
]

function daysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}

export const SEED_MOOD_ENTRIES = {
  u1: [
    { date: daysAgo(6), mood: 3, note: 'Semana de provas começando.' },
    { date: daysAgo(5), mood: 2, note: 'Dormi pouco, ansioso com a prova.' },
    { date: daysAgo(4), mood: 2, note: '' },
    { date: daysAgo(3), mood: 4, note: 'Prova foi bem melhor do que esperava.' },
    { date: daysAgo(2), mood: 3, note: '' },
    { date: daysAgo(1), mood: 4, note: 'Consegui descansar no fim de semana.' },
  ],
}

export const BREATHING_TRACKS = [
  {
    id: 'b1',
    name: 'Respiração 4-7-8',
    description: 'Inspire em 4s, segure por 7s, expire em 8s. Ótimo antes de dormir ou antes de uma prova.',
    durationSeconds: 120,
    pattern: [
      { phase: 'Inspire', seconds: 4 },
      { phase: 'Segure', seconds: 7 },
      { phase: 'Expire', seconds: 8 },
    ],
  },
  {
    id: 'b2',
    name: 'Respiração quadrada',
    description: 'Inspire, segure, expire e segure novamente, todos por 4 segundos. Boa para focar antes de estudar.',
    durationSeconds: 90,
    pattern: [
      { phase: 'Inspire', seconds: 4 },
      { phase: 'Segure', seconds: 4 },
      { phase: 'Expire', seconds: 4 },
      { phase: 'Segure', seconds: 4 },
    ],
  },
  {
    id: 'b3',
    name: 'Respiração calma (5 min)',
    description: 'Ciclo longo e suave para relaxar entre uma aula e outra.',
    durationSeconds: 300,
    pattern: [
      { phase: 'Inspire', seconds: 5 },
      { phase: 'Expire', seconds: 6 },
    ],
  },
]

export const SEED_LIBRARY = [
  {
    id: 'l1',
    title: 'Como lidar com a ansiedade antes de provas',
    tags: ['ansiedade', 'provas'],
    summary: 'Técnicas rápidas de respiração e organização de estudo para reduzir a ansiedade pré-prova.',
    content: 'Respire fundo, organize seu tempo de estudo em blocos curtos e lembre-se: uma prova não define seu valor.',
  },
  {
    id: 'l2',
    title: '5 sinais de que você precisa descansar',
    tags: ['sono', 'autocuidado'],
    summary: 'Como identificar sinais de esgotamento antes que virem um problema maior.',
    content: 'Irritabilidade, dificuldade de concentração e sono irregular são sinais de alerta. Procure pausas regulares.',
  },
  {
    id: 'l3',
    title: 'Organização de rotina para estudantes',
    tags: ['produtividade', 'rotina'],
    summary: 'Um guia simples para equilibrar estudos, descanso e vida social.',
    content: 'Use blocos de tempo fixos para estudo, e reserve horários específicos para descanso — sem culpa.',
  },
  {
    id: 'l4',
    title: 'Respiração consciente em 3 minutos',
    tags: ['respiração', 'ansiedade'],
    summary: 'Um exercício rápido para fazer entre uma aula e outra.',
    content: 'Feche os olhos, conte 10 respirações lentas, e volte sua atenção para o momento presente.',
  },
  {
    id: 'l5',
    title: 'Quando buscar ajuda profissional',
    tags: ['saúde mental', 'autocuidado'],
    summary: 'Sinais de que vale a pena conversar com um psicólogo ou com o serviço de apoio da faculdade.',
    content: 'Tristeza persistente, perda de interesse e isolamento social por mais de duas semanas merecem atenção profissional.',
  },
]

export const SEED_REMINDERS = [
  { id: 'r1', text: 'Beber água e respirar fundo antes da aula de Cálculo', time: '08:00', active: true },
  { id: 'r2', text: 'Pausa de 5 minutos após o almoço', time: '13:00', active: true },
  { id: 'r3', text: 'Registrar o humor do dia antes de dormir', time: '22:00', active: true },
]
