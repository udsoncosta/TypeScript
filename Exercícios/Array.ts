interface ProdutoModel{
    nome: string,
    marca: string,
    categoria: string,
    preco: number,
    qtd: number
}

const produto1: ProdutoModel = {
    nome: 'Macarrão',
    marca: 'Renata',
    categoria: 'Massas',
    preco: 3.0,
    qtd: 3
}

const produto2: ProdutoModel = {
    nome: 'Amaciante',
    marca: 'Downy',
    categoria: 'Higiene',
    preco: 30.00,
    qtd: 1
}

const listaProdutos: ProdutoModel[] = [produto1, produto2];

console.log(...listaProdutos);