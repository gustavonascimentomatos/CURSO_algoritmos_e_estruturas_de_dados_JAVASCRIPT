function Queue() {
    var items = [];

    this.enqueue = function(element) {
        items.push(element); // Adiciona um item a Fila
    };

    this.dequeue = function() {
        
       return items.shift(); // Remove um item da Fila
    };

    this.front = function() {
        return items[0]; // Retorna o 1° item da Fila
    };

    this.isEmpty = function() {
        return items.length === 0; // Retorna se a Fila está vazia
    };

    this.size = function() {
        return items.length; // Retorna o tamanho da Fila
    };

    this.print = function() {
        console.log(items.toString()); // Imprime a Fila no console
    };
}

function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        var added = false;

        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority ) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            items.push(queueElement);
        }
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.print = function(){
        for (let i = 0; i < items.length; i++) {
            console.log(items[i].element + " " + items[i].priority);
        }
    }
}

function HotPotato(nameList, num) {
    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = "";

    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());            
        }
        eliminated = queue.dequeue();
        console.log(eliminated + " was eliminated from the Hot Potato game!");
    }
    return queue.dequeue();
}

function numeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var players = ["Milionário", "José Rico", "Matogrosso", "Mathias", "Tonico", "Tinoco", "Lourenço", "Tabai"];
var winner = HotPotato(players, numeroAleatorio(1, 100));
console.log("The winner is: " + winner);