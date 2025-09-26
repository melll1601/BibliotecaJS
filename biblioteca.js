
export const catalogo= [];
let proximoId = 1; // contador de IDs

import { livro} from './app.js';


export function adicionarLivro() {
     livro.id = proximoId++;
     catalogo.push({...livro});

    console.log(livro);
    console.log("[LIVRO ADICIONADO COM SUCESSO]");
}

export function listarLivros() {
    console.log(catalogo);
}

export function buscarLivro(titulo) {
    return catalogo.find(livro => livro.titulo === titulo);
}


export function editarLivro(livroEncontrado, livroAtualizado) {
    if (!livroEncontrado) {
        console.log("Livro não encontrado!");
        return;
    }

    Object.assign(livroEncontrado, livroAtualizado);
    console.log("[LIVRO ATUALIZADO COM SUCESSO]");
}


export function sairSistema(){
    console.log("[ENCERRANDO SISTEMA...]");
}

