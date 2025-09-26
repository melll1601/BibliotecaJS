import promptSync from 'prompt-sync';
const prompt = promptSync();

import { adicionarLivro, buscarLivro, editarLivro, listarLivros, sairSistema, catalogo, alterarDisponibilidade, removerLivro, livro, livroAtualizado } from './biblioteca.js';


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
    console.log("|-------------------------------------|");
    console.log("| 0- Sair                             |");
    console.log("|-------------------------------------|");
    
    console.log("");
    escolha = parseInt(prompt("[OPÇÃO ESCOLHIDA] ->"));

    switch(escolha){

       case 0:
            console.log("");

            sairSistema();
            break;

        case 1: 
            console.log("");

            console.log("[CADASTRO DE LIVRO]");
            livro.titulo = prompt("| Título do Livro: ");
            livro.autor = prompt("| Autor do Livro: ");
            livro.anoPublicacao = prompt("| Ano de Publicação: ");
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
                livroAtualizado.anoPublicacao = prompt("| Novo Ano de Publicação: ");
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
                livroAtualizado.disponivel = prompt("| O livro está disponível? (s/n): ").toLowerCase() === 's';
                alterarDisponibilidade(livroEncontradoDisp, livroAtualizado.disponivel);
            }

        case 6:
            console.log(" ");
            console.log("[REMOVER LIVRO]");
            const idRemover = parseInt(prompt("| Digite o ID do livro que deseja remover: "));
            const index = catalogo.findIndex(l => l.id === idRemover);
    
            removerLivro(index);
            break;

        case 7:

    }

}


