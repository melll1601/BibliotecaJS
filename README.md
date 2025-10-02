# Sistema de Gerenciamento de Biblioteca 📖

## Objetivo

Desenvolver um sistema simples de gerenciamento de uma biblioteca usando **Node.js**.  
O sistema permite adicionar, listar, buscar, editar e remover livros do catálogo, além de marcar livros como emprestados ou disponíveis.  
O foco é trabalhar com **arrays**, **objetos**, **funções** e a **modularização de código** no Node.js.

---

## Estrutura do Projeto

- `app.js`: arquivo principal, responsável pela execução das operações e interação com o usuário.
- `biblioteca.js`: contém as funções de gerenciamento do catálogo de livros (CRUD, busca, filtragem, etc).

---

## Funcionalidades

### Funcionais

- **Adicionar Livros**
  - Adiciona um novo livro ao catálogo, informando: título, autor, ano de publicação, gênero e disponibilidade (inicialmente disponível).

- **Listar Livros**
  - Lista todos os livros presentes no catálogo.

- **Buscar Livro pelo Título**
  - Permite buscar um livro pelo seu título (busca sem diferenciar maiúsculas/minúsculas).

- **Editar Livros**
  - Permite editar as informações de um livro (título, autor, ano, gênero), utilizando o ID do livro.

- **Alterar Disponibilidade**
  - Permite marcar um livro como emprestado ou disponível, baseado no seu ID.

- **Remover Livro**
  - Remove um livro do catálogo através do seu ID.

### Desafios Extras (Opcional)

- **Filtro de Disponibilidade**
  - Listar apenas livros disponíveis para empréstimo.

- **Busca por Autor**
  - Buscar livros por nome do autor.

- **Validação de Dados**
  - Evita a adição de livros com títulos duplicados no catálogo.

### Desafios Adicionais (Bônus)

- **Filtrar Livros por Gênero**
  - Função para listar livros de um determinado gênero.
  - Exemplo: `listarLivrosPorGenero('Fantasia')`

- **Ordenar Livros por Ano de Publicação**
  - Função para ordenar livros por ano de publicação (crescente/decrescente).
  - Exemplo: `ordenarLivrosPorAno('crescente')`

- **Listar Apenas Livros Disponíveis**
  - Função que exibe somente os livros disponíveis para empréstimo.
  - Exemplo: `listarLivrosDisponiveis()`

- **Registrar Empréstimos de Livros**
  - Permite registrar empréstimo, armazenando nome do usuário e data de devolução.
  - O livro é marcado como indisponível até ser devolvido.

- **Gerar Relatório de Empréstimos**
  - Relatório com todos os empréstimos realizados, exibindo datas e usuário.

---

## Como Executar

1. Instale o [Node.js](https://nodejs.org/)
2. Clone este repositório:
   ```bash
   git clone https://github.com/melll1601/BibliotecaJS.git
   cd BibliotecaJS
   ```
3. Execute o sistema:
   ```bash
   node app.js
   ```

---

## Saída Esperada

Ao executar `app.js`, o sistema exibirá no console todas as operações realizadas, como:

- Adição de um novo livro
- Listagem completa do catálogo
- Busca por título específico
- Edição de informações de um livro
- Alteração de disponibilidade
- Remoção de um livro

---

## Exemplo de Uso

```js
const biblioteca = require('./biblioteca.js');

// Adicionar livro
biblioteca.adicionarLivro('O Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasia');

// Listar livros
biblioteca.listarLivros();

// Buscar por título
biblioteca.buscarLivroPorTitulo('hobbit');

// Editar livro
biblioteca.editarLivro(id, { titulo: 'O Hobbit', autor: 'Tolkien', ano: 1937, genero: 'Fantasia' });

// Alterar disponibilidade
biblioteca.alterarDisponibilidade(id, false); // Emprestado

// Remover livro
biblioteca.removerLivro(id);
```

---
