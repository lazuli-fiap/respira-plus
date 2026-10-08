# Respira+

**seu espaço para respirar entre uma prova e outra**

![status](https://img.shields.io/badge/status-CP5%20%E2%80%94%20Prot%C3%B3tipo%20Funcional-5FB3B3)

## Sobre o projeto

O **Respira+** é um aplicativo web de bem-estar estudantil que ajuda universitários a monitorar o próprio humor e a praticar trilhas de respiração guiada em poucos minutos, entre uma aula e outra. O projeto é desenvolvido como parte da disciplina de Engenharia de Software (Projeto Integrado de Desenvolvimento Ágil), ao longo de três checkpoints:

| Checkpoint | Entrega |
|---|---|
| CP4 | Idealização: documentação, marca, UML inicial, pitch |
| **CP5** (atual) | Protótipo funcional com dados mockados |
| CP6 | Produto final, com persistência de dados real e instalável |

## O problema

Estudantes universitários enfrentam picos recorrentes de ansiedade e estresse (provas, entregas, apresentações), mas o acesso ao apoio psicológico institucional costuma ter fila de espera, custo elevado (terapia particular) ou carregar estigma. Falta um primeiro passo simples, rápido e privado para o estudante entender como está se sentindo e aplicar técnicas de autorregulação emocional.

## Público-alvo

Estudantes universitários de graduação (17–26 anos) que enfrentam picos de estresse acadêmico e buscam uma forma acessível e discreta de cuidar do próprio bem-estar emocional.

## Funcionalidades principais (RF)

- Cadastro e login de usuário
- Registro diário de humor (diário de humor)
- Trilhas de respiração guiada com temporizador
- Histórico/gráfico de evolução do humor
- Biblioteca de conteúdos sobre bem-estar
- Lembretes personalizados
- Edição de perfil
- Painel administrativo para gestão de conteúdo da biblioteca

> Lista completa de requisitos funcionais e não funcionais (RF/RNF), com status de implementação pós-protótipo, em [`docs/CP5_Respira+_Documentacao.docx`](docs/CP5_Respira+_Documentacao.docx) (documentação original do CP4 em [`docs/CP4_Respira+_Documentacao.docx`](docs/CP4_Respira+_Documentacao.docx)).

## Diagramas (UML)

Os diagramas de Casos de Uso e de Classes estão disponíveis em dois lugares:

- Embutidos na documentação: [`docs/CP4_Respira+_Documentacao.docx`](docs/CP4_Respira+_Documentacao.docx)
- Versão colaborativa/editável no Miro: [Board Respira+ no Miro](https://miro.com/app/board/uXjVHwJoSyw=/)

## Identidade visual (Figma)

A marca (logotipo, paleta de cores e tipografia) também foi replicada em um board no Figma: [Respira+ — Identidade Visual no Figma](https://www.figma.com/design/Pg7RGh6ZbN8zK07fxyIkC7)

## Tecnologias

- **Frontend:** React + Vite, React Router, Recharts — dados mockados em `localStorage` (sem backend neste checkpoint)
- **Backend:** a definir pelo grupo a partir do CP6 (ex.: Node.js, Python/Flask ou similar)
- **Banco de dados:** a definir pelo grupo (a partir do CP6)
- **Design:** Figma
- **Gestão do projeto:** Trello
- **Versionamento:** Git / GitHub
- **Deploy:** GitHub Actions + GitHub Pages

## Estrutura de pastas

```
respira-plus/
├── docs/                     # Documentação do projeto (requisitos, UML, decisões)
│   └── CP4_Respira+_Documentacao.docx
├── design/                   # Identidade visual e protótipos (export do Figma)
│   ├── logo.svg
│   └── color-palette.svg
├── src/                      # Código-fonte da aplicação
│   ├── frontend/
│   └── backend/
├── README.md
└── LICENSE
```

> A partir do CP5, `src/frontend/` contém o código-fonte do protótipo (React + Vite). `src/backend/` segue vazio — nasce no CP6. Os diagramas UML ficam na documentação (`docs/`) e no board do Miro linkado acima.

## Gestão do projeto (Trello)

Board com as colunas Backlog, To Do, Doing e Done, tarefas distribuídas entre os integrantes: [Board Respira+ no Trello](https://trello.com/b/hsal1aBF/respira-cp4-cp5-cp6)

## Vídeos

**CP5:**

- Simulação funcional do protótipo: [assista no YouTube](https://youtu.be/Ry1YUwl71_E)
- Apresentação do checkpoint (2 min): [assista no YouTube](https://youtu.be/w0uwkVbsn6o)

**CP4:**

- Pitch de venda (1 min): [assista no YouTube](https://youtu.be/ClqMMybt2_o)
- Apresentação do projeto (2 min): [assista no YouTube](https://youtu.be/B2KggbfRmUo)

## Equipe

| Integrante | Papel |
|---|---|
| Eduardo Rodrigues Fernandes | Product Owner / Gestão do Projeto |
| Ana Clara Silveira Salvatico | UI/UX Designer |
| Vinicius Eiki Franca | Desenvolvedor(a) Frontend |
| Emily Pereira Ribeiro | Desenvolvedor(a) Backend / Arquitetura |
| Fernanda Pereira Molina Teixeira | QA / Documentação técnica & GitHub |

## Como rodar (a partir do CP5)

O protótipo é publicado automaticamente via GitHub Actions a cada push em `main` que altere `src/frontend/`.

**Ambiente publicado, sem necessidade de instalação:**

[lazuli-fiap.github.io/respira-plus](https://lazuli-fiap.github.io/respira-plus/)

**Ou localmente, a partir do código-fonte:**

```
cd src/frontend
npm install
npm run dev   # acesse http://localhost:5173
```

**Contas de demonstração:**

- Estudante: `estudante@respira.com` / `123456`
- Administrador: `admin@respira.com` / `admin123` (acesso ao painel administrativo — RF08)

Também é possível criar uma conta nova pela tela de cadastro (RF01). Não há backend real neste checkpoint: todos os dados são simulados e persistidos em `localStorage`.

## Licença

Projeto acadêmico desenvolvido para a disciplina de Engenharia de Software — Engenharia de Computação, FIAP. Uso educacional.