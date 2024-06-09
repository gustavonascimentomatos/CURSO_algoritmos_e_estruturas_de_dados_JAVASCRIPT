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

function Graph() {
    var vertices = [];
    var adjList = new Dictionary;

    this.addVertex = function(v) { // Adiciona um vertice
        vertices.push(v);
        adjList.set(v, []);
    }

    this.addEdge = function(v, w) { // Adiciona uma aresta
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function() { 
        var saida = "";
        for (let i = 0; i < vertices.length; i++) {
            saida += vertices[i] + " -> "; 
            var neighbors = adjList.get(vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                saida += neighbors[j] + " ";
            }
            saida += "\n";
        }
        return saida;
    }

    var initializeColor = function() {
        var color = [];
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = "white";
        }
        return color;
    }

    this.bfs = function(v, callback) { //Busca por largura "horizontal"
        var color = initializeColor();
        var queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            var neighbors = adjList.get(u);
            color[u] = "grey";
            for (let i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === "white") {
                    color[w] = "grey";
                    queue.enqueue(w);
                }
            }
            color[u] = "black";
            callback(u);
        }
    }

    this.dfs = function(callback) { // Busca em profundidade "vertical"
        var color = initializeColor()
        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === "white") {
                dfsVisit(vertices[i], color, callback);
            }
        }
    }

    var dfsVisit = function(u, color, callback) {
        color[u] = "grey";
        callback(u);

        var neighbors = adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === "white") {
                dfsVisit(w, color, callback);
            }
        }
        color[u] = "black";
    }
}

function printNode(value) { // Função Callback
    console.log("Visited vertx: " + value);
}

var graph = new Graph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());

graph.bfs(myVertices[0], printNode);
console.log("--------------------");
graph.dfs(printNode);






