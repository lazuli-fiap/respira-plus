# Respira+

**seu espaço para respirar entre uma prova e outra**

![status](https://img.shields.io/badge/status-CP4%20%E2%80%94%20Idealiza%C3%A7%C3%A3o-5FB3B3)

## Sobre o projeto

O **Respira+** é um aplicativo web de bem-estar estudantil que ajuda universitários a monitorar o próprio humor e a praticar trilhas de respiração guiada em poucos minutos, entre uma aula e outra. O projeto é desenvolvido como parte da disciplina de Engenharia de Software (Projeto Integrado de Desenvolvimento Ágil), ao longo de três checkpoints:

| Checkpoint | Entrega |
|---|---|
| **CP4** (atual) | Idealização: documentação, marca, UML inicial, pitch |
| CP5 | Protótipo funcional com dados mockados |
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

> Lista completa de requisitos funcionais e não funcionais (RF/RNF) em [`docs/CP4_Respira+_Documentacao.docx`](docs/CP4_Respira+_Documentacao.docx).

## Diagramas (UML)

Os diagramas de Casos de Uso e de Classes estão disponíveis em dois lugares:

- Embutidos na documentação: [`docs/CP4_Respira+_Documentacao.docx`](docs/CP4_Respira+_Documentacao.docx)
- Versão colaborativa/editável no Miro: [🔗 adicionar link do board aqui]

## Tecnologias (planejadas)

- **Frontend:** a definir pelo grupo (ex.: React / HTML, CSS, JS)
- **Backend:** a definir pelo grupo (ex.: Node.js, Python/Flask ou similar)
- **Banco de dados:** a definir pelo grupo (a partir do CP6)
- **Design:** Figma
- **Gestão do projeto:** Trello
- **Versionamento:** Git / GitHub

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

> No CP4 as pastas `src/` podem estar vazias ou conter apenas um `.gitkeep` — o código começa a nascer no CP5. Os diagramas UML ficam na documentação (`docs/`) e no board do Miro linkado acima.

## Equipe

| Integrante | Papel |
|---|---|
| Eduardo Rodrigues Fernandes | Product Owner / Gestão do Projeto |
| Ana Clara Silveira Salvatico | UI/UX Designer |
| Vinicius Eiki Franca | Desenvolvedor(a) Frontend |
| Emily Pereira Ribeiro | Desenvolvedor(a) Backend / Arquitetura |
| Fernanda Pereira Molina Teixeira | QA / Documentação técnica & GitHub |

## Como rodar (a partir do CP5)

Instruções de instalação e execução serão adicionadas aqui assim que o protótipo funcional estiver disponível.

## Licença

Projeto acadêmico desenvolvido para a disciplina de Engenharia de Software — Engenharia de Computação, FIAP. Uso educacional.