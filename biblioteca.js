
export const catalogo= [];
let proximoId = 1; // contador de IDs


export const livro = {
     id : null,
     titulo : null,
     autor : null,
     anoPublicacao : null,
     genero : null,
     disponivel : null
};

export const livroAtualizado = {
    id : null,
    titulo : null,
    autor : null,
    anoPublicacao : null,
    genero :null,
    disponivel : null,

};


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


export function alterarDisponibilidade(livroEncontrado, disponivel) {

    if (!livroEncontrado) {
        console.log("Livro não encontrado!");
        return;
    }

    Object.assign(livroEncontrado, { disponivel });
    console.log("[DISPONIBILIDADE DO LIVRO ATUALIZADA COM SUCESSO]");
}


export function removerLivro(indiceParaRemover) {
    if (indiceParaRemover === -1) {
        console.log("Livro não encontrado!");
        return;
    }

    catalogo.splice(indiceParaRemover, 1);
    console.log("[LIVRO REMOVIDO COM SUCESSO]");

}

export function listarDisponiveis() {
    const disponiveis = catalogo.filter(livro => livro.disponivel);

    if(!disponivel){
        console.log("| - Nenhum livro disponível");
    }else{
    console.log(disponiveis);
    }
}

export function listarGenero(genero) {

    if(!genero){
        console.log("| - Nenhum livro encontrado");
    }else{
        const filtrados = catalogo.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
        console.log(filtrados);
    }
}

export function buscarAutor(autor) {

    const resultado = catalogo.filter(
    livro => livro.autor.toLowerCase().includes(autor)
    );
    
    console.log(resultado);
}

export function sairSistema(){
    console.log("[ENCERRANDO SISTEMA...]");
}

