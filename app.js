import promptSync from 'prompt-sync';
const prompt = promptSync();

import { adicionarLivro, buscarLivro, editarLivro, listarLivros, sairSistema, catalogo, alterarDisponibilidade, removerLivro, livro, livroAtualizado, listarDisponiveis, listarGenero, buscarAutor, ordenarAno, emprestimo, emprestarLivro, listarEmprestimos } from './biblioteca.js';


let escolha;



while(escolha != 0){

    console.log("");

    console.log("|-------------------------------------|");
    console.log("|   - BEM VINDO - BIBLIOTECA MELU -   |");
    console.log("|-------------------------------------|");
    console.log("| 1- Cadastro      | 2 - Listar       |");
    console.log("|------------------|------------------|");
    console.log("| 3- Buscar        | 4 - Editar       |");
    console.log("|------------------|------------------|");
    console.log("| 5- Alterar Disp. | 6 - Remover      |");
    console.log("|------------------|------------------|");
    console.log("| 7- Filtrar       | 8 - Busca Autor  |");
    console.log("|------------------|------------------|");
    console.log("| 9- Ordenar Ano   | 10 - Empréstimo  |");
    console.log("|-------------------------------------|"); 
    console.log("| 0- Sair                             |");
    console.log("|-------------------------------------|");
    
    console.log("");
    escolha = parseInt(prompt("[OPÇÃO ESCOLHIDA] ->"));

    switch(escolha){
             case 1: 

                console.log("");

                console.log("[CADASTRO DE LIVRO]");
                livro.titulo = prompt("| Título do Livro: ");
                livro.autor = prompt("| Autor do Livro: ");
                livro.anoPublicacao = parseInt(prompt("| Ano de Publicação: "));
                livro.genero = prompt("| Gênero do Livro: ");
                livro.disponivel = true;   

                adicionarLivro(livro);

            break;

            case 2: 

                console.log("");
                console.log("[LISTA DE LIVROS]");
                listarLivros();

            break;

            case 3:

                console.log("");
                console.log("[BUSCAR LIVRO]");

                console.log("| Digite o título do Livro --> ");
                const buscaTitulo = prompt();

                const resultado = buscarLivro(buscaTitulo);
                if(resultado){
                    console.log("Livro encontrado:");
                    console.log(resultado);
                } else {
                    console.log("Livro não encontrado.");
                }

            break;

            case 4: 

                console.log(" ");  
                console.log("[EDITAR LIVRO]");

                const id = parseInt(prompt("| Digite o ID do livro que deseja editar: "));
                const livroEncontrado = catalogo.find(l => l.id === id);

                if(livroEncontrado){

                    livroAtualizado.titulo = prompt("| Novo Título do Livro: ");
                    livroAtualizado.autor = prompt("| Novo Autor do Livro: ");
                    livroAtualizado.anoPublicacao = parseInt(prompt("| Novo Ano de Publicação: "));
                    livroAtualizado.genero = prompt("| Novo Gênero do Livro: ");
                    
                    editarLivro(livroEncontrado, livroAtualizado);
                
                }else {
                    console.log("Livro não encontrado.");
                }

            break;

            case 5: 

                console.log(" ");
                console.log("[ALTERAR DISPONIBILIDADE DO LIVRO]");
                const idDisp = parseInt(prompt("| Digite o ID do livro que deseja alterar a disponibilidade: "));
                const livroEncontradoDisp = catalogo.find(l => l.id === idDisp);

                if(livroEncontradoDisp){
                    const disponivel = prompt("| O livro está disponível? (s/n): ").toLowerCase() === 's';
                    alterarDisponibilidade(livroEncontradoDisp, disponivel);
                }

            break;

            case 6:

                console.log(" ");
                console.log("[REMOVER LIVRO]");
                const idRemover = parseInt(prompt("| Digite o ID do livro que deseja remover: "));
                const index = catalogo.findIndex(l => l.id === idRemover);
        
                removerLivro(index);

            break;

            case 7:

                console.log(" ");
                console.log("|----------------------|");
                console.log("|    FILTRAR LIVROS    |");
                console.log("|----------------------|");
                console.log("| 1- Disponibilidade   |");
                console.log("|----------------------|");
                console.log("| 2- Gênero            |");
                console.log("|----------------------|");

                const opcaoListar = parseInt(prompt("[OPÇÃO ESCOLHIDA] -> "));

                switch(opcaoListar){

                    case 1:
                        console.log(" ");
                        console.log("[FILTRAR POR DISPONIBILIDADE]");

                        listarDisponiveis();

                    break;

                    case 2:
                        console.log(" ");
                        console.log("[FILTRAR POR GÊNERO]");
                        const generoBusca = prompt("| Digite o gênero que deseja buscar: ").toLowerCase();

                        listarGenero(generoBusca);

                    break;
                }


            break;

            case 8:

                console.log(" ");
                console.log("[BUSCAR POR AUTOR]")

                const pesquisaAutor = prompt("| Digite o nome do autor que deseja buscar: ").toLowerCase();

                buscarAutor(pesquisaAutor);

            break;


                case 9: 

                    console.log(" ");
                    console.log("[ORDENAR POR ANO DE PUBLICAÇÃO]");
                    ordenarAno();

                break;

                case 10:

                    console.log(" ");
                    console.log("|----------------------|");
                    console.log("|   EMPRESTAR LIVROS   |");
                    console.log("|----------------------|");
                    console.log("| 1- Cadastrar Emp.    |");
                    console.log("|----------------------|");
                    console.log("| 2- Listar Emp.       |");
                    console.log("|----------------------|");

                    const opcaoEmprestimo = parseInt(prompt("[OPÇÃO ESCOLHIDA] -> "));

                    switch(opcaoEmprestimo){

                        case 1:
                            console.log(" ");
                            console.log("[EMPRÉSTIMO DE LIVRO]");

                            emprestimo.nomeCliente = prompt("| Nome do Cliente: ");
                            emprestimo.livroEmprestado = prompt("| Título do Livro Emprestado: ");
                            emprestimo.dataEmprestimo = prompt("| Data do Empréstimo (DD/MM/AAAA): ");
                            emprestimo.dataDevolucao = prompt("| Data de Devolução (DD/MM/AAAA): ");
                
                            emprestarLivro();

                        break;

                        case 2:
                            console.log(" ");
                            console.log("[LISTA DE EMPRÉSTIMOS]");

                            listarEmprestimos();

                        break;
                    }
                break;
                
            case 0:
                console.log("");
                sairSistema();

            break;
        }   
   ///
}


