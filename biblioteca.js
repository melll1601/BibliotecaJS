
export const catalogo= [];
export const Emprestimo= [];

let proximoId = 1; 


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

export const emprestimo = {
    id: null,
    nomeCliente: null,
    livroEmprestado: null,
    dataEmprestimo: null,
    dataDevolucao: null,
};


export function adicionarLivro() {

    const livroCadastrado =  catalogo.some(l => l.titulo.toLowerCase() === livro.titulo.toLowerCase());

    if(livroCadastrado){
        console.log(" ");
        console.log("[ERRO, LIVRO JÁ CADASTRADO]");
        return;
    }

    livro.id = proximoId++;
    catalogo.push({...livro});

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

    if(!disponiveis){
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


export function ordenarAno() {


    for (let i = 0; i < catalogo.length - 1; i++) {

        const ordenados = [...catalogo].sort((a, b) => a.anoPublicacao - b.anoPublicacao);
        ordenados.forEach(livro => console.log(livro));
    }
}


export function emprestarLivro() {
    const emprestimoFeito = Emprestimo.some(e => e.livroEmprestado.toLowerCase() == emprestimo.livroEmprestado.toLowerCase());

    if(emprestimoFeito){
        console.log(" ");
        console.log("[LIVRO JÁ CADASTRADO]");
        return;
    }

    const livroEncontrado = catalogo.find(l => l.titulo.toLowerCase() === emprestimo.livroEmprestado.toLowerCase());


    if(livroEncontrado && livroEncontrado.disponivel){
    emprestimo.id = proximoId++;
    Emprestimo.push({...emprestimo});

    console.log("[EMPRÉSTIMO REALIZADO COM SUCESSO]");
    console.log(" ");
    
    alterarDisponibilidade(livroEncontrado, false);

    }else{
        console.log(" ");
        console.log("[LIVRO NÃO DISPONÍVEL PARA EMPRÉSTIMO]");
        return;
    }
}   


export function listarEmprestimos() {
    console.log(Emprestimo);
}


export function sairSistema(){
    console.log("[ENCERRANDO SISTEMA...]");
}
