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

var linkedlist = new LinkedList();

linkedlist.append("Mano Brown");
linkedlist.append("Sabotage");
linkedlist.append("Mv Bill");
linkedlist.print();

linkedlist.removeAt(1);
linkedlist.print();

linkedlist.insert(0, "Ndee Naldinho")
linkedlist.print();

linkedlist.insert(2, "Thaíde")
linkedlist.print(); 

console.log("Thaíde está inserido na posição: "+ linkedlist.indexOf("Thaíde"));
console.log("Mano Brown está inserido na posição: "+ linkedlist.indexOf("Mano Brown"));

linkedlist.remove("Mv Bill");
linkedlist.print();

console.log(linkedlist.isEmpty());
console.log(linkedlist.size());
console.log(linkedlist.getHead());
