function LinkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) { // Adiciona um elemento no final da lista
        var node = new Node(element); // Cria-se uma instancia passando o elemento como parametro e o 'next' como "NULL"
        var current;

        if (head === null) { // Valida de a cabeça esta vazia
            head = node; // Atribiu a 'node' => {'element', null}
        } else { // Entra no aqui caso já tenha algo em head 
            current = head; // Recebe o valor atual que está dentro de head {'element', null}
            while (current.next) { // Valida de o next não é nulo
                current = current.next;
            }
            current.next = node; // O next antes null, agora recebe o novo 'node' com {'element', null}
        }
        length++;
    }

    this.insert = function(position, element) {  // Adiciona um elemento em uma posição específica
        if (position >= 0 && position <= length) {
            var node = new Node(element);
            var current = head;
            var previous;
            var index = 0;
        
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this. removeAt = function(position) { // Remove o elemento por uma posição específica
        if (position > -1 && position < length) {
            var current = head;
            var previous;
            var index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length --;
            return current.element;
        } else {
            return null;
        }
    }

    this.remove = function(element) { // Remove o elemento por um elemento direto
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.indexOf = function(element) {  // Retorna a posição do elemento
        var current = head;
        var index = 0;

        while(current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    this.isEmpty = function() { // Retorna se a instancia esta vazia
        return length === 0;
    }

    this.size = function() { // Retorna o tamanho da instancia
        return length;
    }

    this.getHead = function() { // Retorna o Head o 1º elemento da lista
        return head;
    }

    this.toString = function() { // Converte a instancia para string
        var current = head;
        var string = "";

        while(current) {
            string += current.element + ", ";
            current = current.next;
        }
        string = string.trim().slice(0, -1);
        return string
    }

    this.print = function() { // Imprime no console
        console.log(this.toString());
    }
}

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

function HashTable() {
    var table = [];

    var valuePair = function(key, value) {
        this.key = key;
        this.value = value;
        this.toString = function() {
            return "[" + this.key + " - " + this.value + "]";
        }
    }

    this.putSemTratamento = function(key, value) { // Insere um elemento sem tratar colisão
        var position = loseloseHashCode(key);
        console.log(position + " " + key);
        table[position] = value;
    }

    this.putComTratamento = function(key, value) { // Insere um elemento tratando colisão
        var position = loseloseHashCode(key);
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new valuePair(key, value));
    }

    this.removeSemTratamento = function(key) { // Remove um elemento
        table[loseloseHashCode(key)] = undefined; 
    }

    this.removeComTratamento = function(key) { // Remove um elemento
        var position = loseloseHashCode(key);
        
        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }

    this.getSemTratamento = function(key) { // Retorna o valor da chave caso exista
        return table[loseloseHashCode(key)];
    }

    this.getComTratamento = function(key) { // Retorna o valor da chave caso exista
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    }

    var loseloseHashCode = function(key) { // Retorna o hash (numérico)
        var hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    this.print = function() {
        for (let i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + " : " + table[i]);
            }
        }
    }
}

var dictionary = new Dictionary();

dictionary.set("Elliot Alderson","alderson@email.com");
dictionary.set("Tyrell Wellick", "wellick@email.com");
dictionary.set("Whiterose", "whiterose@email.com");
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

var hash = new HashTable();

hash.putComTratamento("Elliot Alderson","alderson@email.com");
hash.putComTratamento("Tyrell Wellick", "wellick@email.com");
hash.putComTratamento("Whiterose", "whiterose@email.com");
hash.putComTratamento("Phillip Price", "price@email.com");
hash.putComTratamento("Fernando Vera", "vera@email.com");
hash.putComTratamento("Angela Moss", "moss@email.com");
hash.putComTratamento("Gideon Goddard", "goddard@email.com");
hash.putComTratamento("Terry Colby", "colb@email.com");
hash.putComTratamento("Scott Knowles", "knowls@email.com");
hash.putComTratamento("Darlene Alderson", "darlene@email.com");
hash.putComTratamento("Dominique DiPierro", "dipierro@email.com");
hash.putComTratamento("Krista Gordon", "gordon@email.com");
hash.putComTratamento("Leslie Romero", "romero@email.com");
hash.putComTratamento("Ernesto Santiago", "santiago@email.com");
hash.putComTratamento("Shayla Nico", "nico@email.com");
hash.print();
