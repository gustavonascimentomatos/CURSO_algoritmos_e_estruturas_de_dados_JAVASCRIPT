/* Módulo 02 - Aula 01: Introdução ao Array */ 
    var avgTemp = [];
    avgTemp[0] = 31.9;
    avgTemp[1] = 35.3;
    avgTemp[2] = 42;
    avgTemp[3] = 38;
    avgTemp[4] = 25.5;

    console.log(avgTemp);
/**/

/* Módulo 02 - Aula 02: Criando e Inicializando Arrays */
    var diasDaSemana = new Array(7);
    diasDaSemana[0] = "Domingo";
    diasDaSemana[1] = "Segunda-Feira";
    diasDaSemana[2] = "Terça-Feira";
    diasDaSemana[3] = "Quarta-Feira";
    diasDaSemana[4] = "Quinta-Feira";
    diasDaSemana[5] = "Sexta-Feira";
    diasDaSemana[6] = "Sábado";

    console.log(diasDaSemana);
/**/

/* Módulo 02 - Aula 03: Acessando Elementos Através Da Iteração */
    var mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
    for (let index = 0; index < mesesDoAno.length; index++) {
        console.log(mesesDoAno[index]);
    };

    var fibonacci = [0, 1, 1];
    for (let index = 3; index < 20; index++) {
        fibonacci[index] = fibonacci [index - 1] + fibonacci[index - 2];
    }

    for (let index = 0; index < fibonacci.length; index++) {
        console.log(fibonacci[index]);
    };
/**/

/* Módulo 02 - Aula 04: Inserindo Elementos do Array */
    var numerosAula4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numerosAula4[10] = 10;
    numerosAula4[numerosAula4.length] = 11
    numerosAula4[numerosAula4.length] = 12

    // Método "push" insere o valor passado como parâmetro no final do Array
    numerosAula4.push(13)
    numerosAula4.push(14)

    // Método "unshift" insere o valor passado como parâmetro no inicio do Array
    numerosAula4.unshift(-1)
    numerosAula4.unshift(-2)
/**/

/* Módulo 02 - Aula 05: Removendo Elementos Do Array */
    var numerosAula5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Método "pop" exclui o último elemento do Array, não é necessário passar valor como parâmetro
    numerosAula5.pop();

    // Método "shift" exclui o último elemento do Array, não é necessário passar valor como parâmetro
    numerosAula5.shift();
/**/

/* Módulo 02 - Aula 06: Inserindo/Removendo Elementos Em Uma Posição Específica Do Array */
    var numerosAula6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    /* Método "splice" exclui um ou mais valores do Array (1º Parâmetro define onde inicia o fatiamento) (2º Parâmetro define quantos elementos serão removidos) ***INCLUI O PRIMEIRO EXCLUI O SEGUNDO*** */ 
    numerosAula6.splice(3, 3);

    /* Método "splice" inclui um ou mais valores no Array (1º Parâmetro define onde inicia o fatiamento) (2º Parâmetro como "ZERO" define que não serão removidos valore) (A partir do 3º Parâmetro são os valores que serão inseridos) */
    numerosAula6.splice(3, 0, 3, 4, 5);
/**/

/* Módulo 02 - Aula 07/08: Arrays Bidimensionais */ 
    var mediaTempSemanaAula8 = [];

    var mediaTempSemana1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
    var mediaTempSemana2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

    mediaTempSemanaAula8[0] = mediaTempSemana1;
    mediaTempSemanaAula8[1] = mediaTempSemana2;
    
    // Para acessar uma posição especifica basta informar os índices do valor que deseja acessar
    console.log(mediaTempSemanaAula8[1][2]);

    for (let linha = 0; linha < mediaTempSemanaAula8.length; linha++) {
        let linhaCompleta = "";
        for (let coluna = 0; coluna < mediaTempSemanaAula8[linha].length; coluna++) { 
            linhaCompleta += mediaTempSemanaAula8[linha][coluna] + " ";
        }
        console.log(linhaCompleta.trim());
    }
/**/

/* Módulo 02 - Aula 09: Arrays Tridimensionais */
    var mes = [];

    var primeirasSemanas = [];
    var ultimasSemanas = [];

    var mediaTempSemana1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
    var mediaTempSemana2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

    var mediaTempSemana3 = [13, 45.7, 18, 7, 13.4, 21.6, 15];
    var mediaTempSemana4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8];

    primeirasSemanas = [mediaTempSemana1, mediaTempSemana2]
    ultimasSemanas = [mediaTempSemana3, mediaTempSemana4];

    mes = [primeirasSemanas, ultimasSemanas]

    console.log(mes[1][1][4])

    for (let i = 0; i < mes.length; i++) {
        for (let j = 0; j < mes[i].length; j++) {
            let linhaCompleta = "";
            for (let k = 0; k < mes[i][j].length; k++) {
                linhaCompleta += mes[i][j][k] + " ";
            }
            console.log(linhaCompleta.trim());
        }
    }
/**/
