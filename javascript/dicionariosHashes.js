function Dictionary() {
    var items = {};

    this.set = function(key, value) { // Adiciona um novo item ao dicionário
        items[key] = value;
    }

    this.delete = function(key) { // Remove o valor do dicionário utilizando a chave 
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.has = function(key) { // Verifica se a chave existe e retorna um booleano
        return items.hasOwnProperty(key);
    }

    this.get = function(key) { // Retorna um valor específico a partir da chave informada 
        return this.has(key) ? items[key] : undefined; // Operador ternario, verifica se é true ou false e retorna 1º ou 2º opção
    }

    this.clear = function() { // Remove todos os elementos do dicionário
        items = {};
    }

    this.size = function() { // Retorna a quantidade de elementos contidos no dicionário
        return Object.keys(items).length;
    }

    this.keys = function() { // Retorna um array com todas as cheves do dicionário
        return Object.keys(items);
    }

    this.values = function() { // Retorna um arrau com todos os valores do dicionário
        var values = [];
        keys = Object.keys(items);

        for (let i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);            
        }
        return values;
    }

    this.getItems = function() { // Retorna os o conteudo do dicionário como objeto
        return items;
    }
}

var dictionary = new Dictionary();

dictionary.set("Elliot Alderson","alderson@email.com")
dictionary.set("Tyrell Wellick", "wellick@email.com")
dictionary.set("Whiterose", "whiterose@email.com")
dictionary.delete("Tyrell Wellick");

console.log(dictionary.has("Elliot Alderson"));
console.log(dictionary.has("Mr. Robot"));
console.log(dictionary.size());
console.log(dictionary.get("Whiterose"));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());

dictionary.clear();

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.size());