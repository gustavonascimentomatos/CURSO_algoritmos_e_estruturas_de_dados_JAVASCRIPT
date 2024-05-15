/* Módulo 03 - Aula 01 a 04: Introdução, Implementação, Teste e Análise Gráfica de Pilha */
    function Stack() {
        var items = [];

        this.push = function(element) {
            items.push(element); // Adiciona um novo item à Pilha
        }

        this.pop = function() {
            return items.pop(); // Remove o item do topo da Pilha
        }

        this.peek = function() {
            console.log(items[items.length - 1]) // Exibe o elemento que está no topo da Pilha
            return items[items.length - 1]; // Retorna o elemento que está no topo da Pilha
        }

        this.isEmpty = function() {
            if (items.length === 0) {
                console.log("A Pilha está vazia!"); // Exibe uma mensagem informado que a pilha está vazia
                return true; // Retorna que Pilha está vazia
            } else {
                console.log("A Pilha não está vazia!"); // Exibe uma mensagem informado que a pilha está vazia
                return false; // Retorna que a Pilha não está vazia
            }
        }

        this.clear = function(){
            items = []; // Limpa a Pilha
        }

        this.size = function() {
            if (items.length < 1){
                console.log("A Pilha possui: 0 elementos");
                return items.length; // Informa o tamanho da Pilha
            } else if (items.length === 1){
                console.log("A Pilha possui: 1 elemento");
                return items.length; // Informa o tamanho da Pilha
            } else {
                console.log("A pilha possui: " + items.length + " elementos")
                return items.length; // Informa o tamanho da Pilha
            }
        }

        this.print = function(){
            console.log(items.toString()); //Impreime a Pilha no console
        }
    };
/**/

/* Módulo 03 - Aula 05/06: Exercício Decimal Para Binário */
    function decToBin(decNumber) {
        var restStack = [];
        var rest;
        var binaryString = "";

        while(decNumber > 0) {
            rest = Math.floor(decNumber % 2);
            restStack.push(rest);
            decNumber = Math.floor(decNumber / 2);
        }

        while (restStack.length > 0) {
            binaryString += restStack.pop().toString();
        }

        return binaryString;
    };
    console.log(decToBin(6));
/**/

/* Módulo 03 - Aula 07/08: Exercício Conversão De Base */
    function baseConverter(decNumber, base) {
        var restStack = [];
        var rest;
        var baseString = "";
        var digits = "0123456789ABCDEF";

        while (decNumber > 0) {
            rest = Math.floor(decNumber % base);
            restStack.push(rest);
            decNumber = Math.floor(decNumber / base);
        }

        while (restStack.length > 0) {
            baseString += digits[restStack.pop()];
        }

        return baseString;
    };
    console.log(baseConverter(123, 16));
/**/