// testar validação cpf

// com: nove primeiros dígitos;
// valor de 10 à 2 para multiplicar;
// resultado da multiplicação;
// somar os valores obtidos;
// (* 10) / 11;
// pegar resto

// segue: dez primeiros dígitos;
// valor de 11 à 2 para multiplicar;
// resultado da multiplicação;
// somar os valores obtidos;
// (* 10) / 11;
// pegar resto

function testeCpf() {
  let cpf = document.getElementById("insere-cpf").value;
  // para pegar o que foi digitado - apenas o seu valor
  const numero = cpf.length;
  // para percorrer os números

  // verificação para saber se há 11 números
  if (numero !== 11) {
    alert("Cpf inválido");
  } else {
    alert("Cpf válido");
  }

  let soma = 0;
  let resto = 0;
  let valido = false;
    // 0 - 9 pois quero da posição 0 à 8 (9 dígitos);
  for (i = 0; i < 9; i++) {
    // substring usado para pegar as posições 1 à 1
    soma = soma + cpf.substring((i - 1, i) * (11 - i));
    // i - 1 será da posição 0 ao 1, que será o i
    // 11 - i, são as posições sendo multplicadas
    // resultado da soma, multiplicado por 10 e dividido por 11
  }
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  // se resto for diferente do primeiro validador (9), não entro nem no segundo e já retorno falso
  var abc = parseInt(cpf.substring(9, 10););
  if (resto != abc) {
    valido = false;
  }

  // 1 - 10 pois quero da posição 1 à 9 (9 dígitos);
  let soma2 = 0;
  // visto que já foi usado uma soma acima
  for (i = 1; i <= 10; i++) {
    soma2 = soma2 + cpf.substring((i - 1, i) * (12 - i));
    resto = (soma2 * 10) % 11;
    // resultado da soma, multiplicado por 10 e dividido por 11
  }

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) valido = false;
  valido = true;

  if (valido == true) {
    alert("Cpf válido");
  } else {
    alert("Cpf inválido");
  }
}
// funcionamento substring - aula

// var nome = "Lara";
// nome.substring(0, 1);
// // - cpf.substring(i -1, i) * (11 - i)
// // 11 - i (10)
// console.log(nome.substring(1, 3));
