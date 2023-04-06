var teste = 5;

console.log(this);
console.log(this.teste)
console.log(teste)

let pessoa = {
    nome: "Lucas",
    idade: 21,
    falar: function() {
        console.log("Olá, tudo bem?")
    },
    dizerNome: function() {
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1; 
    },
    saudacao: function() {
        return "Sr." + this.nome
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario()

console.log(pessoa.idade);   

console.log("Olá " + pessoa.saudacao());