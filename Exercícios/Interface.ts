interface UserModel{
    nome: string,
    sobrenome: string,
    idade: number,
    estado: string,
    genero: string
}

const User1: UserModel = {
    nome: 'Yuri',
    sobrenome: 'Lima',
    idade: 26,
    estado: 'São Paulo',
    genero: 'Masculino'
}

const User2: UserModel = {
    nome: 'Jacqueline',
    sobrenome: 'Oliveira',
    idade: 28,
    estado: 'Minhas Gerais',
    genero: 'Feminino'
}

console.log(User1)
console.log(User2)