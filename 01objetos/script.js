var p1 = {
    nome: "Lucas",
    idade: 21,
    estaTrabalhando: false,
};

console.log(p1);

console.log(p1.nome);

console.log(p1.idade);

console.log("O meu nome é " + p1.nome)

if (p1.estaTrabalhando == true) {
    console.log("O " + p1.nome + " está trabalhando!");
} else {
    console.log("O " + p1.nome + " não está trabalhando!")
}