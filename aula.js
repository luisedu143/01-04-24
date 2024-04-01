/**
 * O algoritmo ifelse serve para validação de dados, por exemplo:
 * 
 * if (variavel1 == variavel2) { algo irá acontecer se a variavel1 for igual a variavel2 } else { algo irá acontecer se a variavel1 for igual a variavel2 } else { algo irá acontecer se a variavel1 for diferente da variavel2 }
 * 
 * if: nome do algoritmo
 * parênteses (): local onde se declaram os parametros ou expressao a ser 
 * validada
 * chave {}: bloco de codigos a serem executados, ou seja, tudo que 
 * estiver dentro do bloco de codigos sera executado 
 * else: "senao" e onde serao executados os codigos, que estiverem dentro 
 * do bloco {}, caso a validacao do algoritimo "if" retorne falsa 
 * 
 * operadores logicos 
 * 
 * == serve para comparar se uma variavel/valor é igual a outra 
 * != serve para comparar se uma variavel/valor é diferente a outra
 *  > serve para comparar se uma variavel/valor é maior a outra
 * < serve para comparar se uma variavel/valor é menor a outra
 * 
 * se "falso": adicionar o ponto de exclamação no inicio da declaraçao de parametros/expressao, por exemplo:
 * if (!variavel1 == variavel2) { bloco de codigo } aqui significa que:
 * se a comparaçao da variavel1 com a variavel2 retornar falso, os codigos que estiverem dentro do bloco de codigo serao executados, não havendo a necessidade do uso da clausula "else"
 * 
 * criar um validador onde voce ira declarar duas variaveis, cada uma com um valor DIFERENTE da outra, entao havera uma resposta diferente pra cada situação 
 * 
 * vamos criar dois inputs, onde cada input irá para cada uma das duas variaveis, ou seja:
 * <input type="text" id="txtVar1" />
 * <input type="text" id="txtVar2" />
 * 
 * var txtVar1 = document.getElementByid("txtVar1");
 * var txtVar2 = document.getElementByid("txtVar2");
 * 
 * txtVar1.volue que tem que ser comparado com o txtVar2.volue 
 * 
 * enviar os dados via console.log()
 */
    function verificar() {
const P = ducument.getElementByid("P");
const P2 = ducument.getElementByid("P2");


if (P.value == P2.value ) {
    console.log("São iguais :)")
} else {
    console.log("São diferentes :(")
}
    }