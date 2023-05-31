//nome = 'João';
//console.log(nome);

//nome = 'Pedro';
//console.log(nome);


//sobrenome = 'Oliveira';
//console.log(sobrenome);


//console.log(endereco);
//console.log(endereco.rua);

let altura=null;
//console.log(altura);



let endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
};

//let usuario = {
   // nome: 'Diego',
   // email: "mail@mail.com",
   // endereco: endereco,
//};


//console.log(typeof usuario);
//console.log(usuario);
//console.log(usuario.endereco.rua);

let nome = 'João';
nome = 'João Vitor';
let sobrenome = 'Silva';

let nomeCompleto = nome + ' ' + sobrenome;
//let nomeCompleto2 = `${nome} ${sobrenome}`;

console.log(nomeCompleto);
//console.log(nomeCompleto2);

//SOMA
const idade = 27 + 3;
const idade2 = 12;
const idade3 = idade + idade2;

const informacaoCompleta = 'Meu nome é ' + nomeCompleto + ' e tenho ' + idade + ' anos.';

console.log(informacaoCompleta);

let usuario = {
    nome: nome,
    sobrenome: sobrenome,
    nomeCompleto: nomeCompleto,
    idade: idade,
    informacaoCompleta: informacaoCompleta,
    endereco: endereco,
};

console.log(usuario);