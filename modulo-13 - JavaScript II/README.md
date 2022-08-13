# Módulo 13 - JavaScript II

## Anotações anteriores
- Lembrando do Git Flow (Aula 5: Git Flow - 14:45)
    - Branchs
        - São ramificações diferentes correndo em paralelo;
        - *main/master* (vai para a produção, quando o projeto é publicado);
        - *develop* (alterações de teste sem afetar a Branch principal, só vou subir esta para a amaster depois que concluir todos os conjuntos de features e atividades que deveriam ser desenvolvidas);

        - versionamento 0.1.10

        - git branch (mostra a branch atual)
        - git checkout -b dev (saio da branch atual e cria uma nova branch chamada "dev" e te manda pra ela)
        - git add * (adiciona todas as alterações pra comitar)
        - git commit -m 'mensagem do commit' (faz o commit na branch 'dev')
        - git fetch --all (verifica se tem alguma alteração na branch master)
        - git merge main
        - git push
        - git push --set-upstream origin dev (cria a nova brech no git)
        - git checkout main

## Anotações do módulo
### Estruturas condicionais
 - Permitem o direcionamento do usuário, o fluxo do códido. 
 - Dependendo das variáveis utilizadas eles possuem exessões que são alternativas caso alguma condição não seja atendida do modo esperado.
    - Uma saída do código para o usuário achar um novo caminho ou para que o sistema não fique travado.

# Operadores lógicos

## Aritméticos: retornam o resultado de uma operação
+ somar
- subtrair
* multiplicar
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retornam booleano (true/false)
<  menor que <br>
>  maior que
<= menor ou igual
>= maior ou igual

## Comparadores lógicos: teste lógivo, retornam booleano (true/false)
==  igualdade entre sentenças (valor)
!=  diferen;ca entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferenças entre sentenças (valor e tipo)

a == b = true
a != b = false

* Atribuição

a = b
a = 4
## Operação de lógica e junças lógica

! NÃO (NOT)
&& E (AND)
|| OU (OR)

O sinal de exclamação (!) é o operador NOT, utilizado para negar a sentença que vem na sequência.

#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs.

Exemplo:

var meuCarro = cor == "preto" ? "preto" = "branco";

## If
if (...) {

}

## Else
else (...) {

}

if (cor == "preto") {
    meuCarro = "Fuscão"
} else if (cor == "branco") {
    meuCarro = "Gol"
} else if (cor == "cinza") {
    meuCarro = "Up - TSI"
} else if (cor == "azul") {
    meuCarro = "Corolla"
}

## Switch

switch (cor) {
    case 'branco' : 
        meuCarro = 'Corsa';
        break;
    case 'preto' :
        meuCarro = 'UP';
        break;
    case 'cinza' :
        meuCarro = 'Palio';
        break;
    default :
        console.log ('nao temos o carro desejado');
}

## Média

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media > 8) {
    console.log('Aluno Aprovado')
} else {
    console.log('Aluno Reprovado')
}

## Laços de repetição (Loop)

for([expressãoInicial]; [condição]; [incremento])

// fazer a revisão do carro em 10 km

var km;
var revisão = 3;

for(km = 0; km <= revisão; km++ ){
    console.log('apenas ' + km + 'kms, então ainda pode rodar')
}

### Cálcula média de alunos

var alunos = [
    [6, 7, 8, 6],
    [6, 7, 4, 7],
    [8, 6, 7, 8]
]

var nota = 0;
for (var i = 0; i < alunos.length; i++ ){

    nota = 0
    aluno = alunos[i]
    console.log('Notas do aluno: ' + aluno)
    
    for( c = 0; c < aluno.length; c++ ){
        nota += aluno[c]
    }
    
    media = nota/4;
    
    if(media >= 7){
        resultado = 'aprovado'
    } else {
        resultado = 'reprovado'
    }
    console.log('Média: ' + media + ' - ' + resultado);
}