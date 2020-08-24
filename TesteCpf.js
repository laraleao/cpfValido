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
  const cpf = prompt("Digite seu cpf:");
  const numero = cpf.length;

  // verificação para saber se há 11 números
  if (numero !== 11) {
    alert("Cpf inválido");
  } else {
    alert("Cpf válido");
  }
}
let soma = 0;
let resto = 0;

// 0 - 9 pois quero da posição 0 à 8 (9 dígitos);
for (i = 0; i < 9; i++) soma = soma + cpf.substring((i - 1, i) * (11 - i));
resto = (soma * 10) % 11;

if (resto == 10 || resto == 11) resto = 0;
if (resto != cpf.substring(9, 10)) return false;

// 0 - 9 pois quero da posição 0 à 8 (9 dígitos);
soma = 0;
for (i = 1; i <= 10; i++) soma = soma + cpf.substring((i - 1, i) * (12 - i));
resto = (soma * 10) % 11;

if (resto == 10 || resto == 11) resto = 0;
if (resto != cpf.substring(10, 11)) return false;
return true;

// funcionamento substring - aula

// var nome = "Lara";
// nome.substring(0, 1);
// // - cpf.substring(i -1, i) * (11 - i)
// // 11 - i (10)
// console.log(nome.substring(1, 3));
