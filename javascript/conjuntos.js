function Conjunto() {
    var items = {};

    this.add = function(value) { // Adiciona um novo item ao conjunto
        if (!this.has(value )) {
            items[value] = value;
            return true;
        }
        return false;
    }

    this.delete = function(value) { // Remove um valor do conjunto
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    this.has = function(value) { // Retornar se o valor existe dentro do conjunto
        return items.hasOwnProperty(value);
    }

    this.clear = function() { // Remove todos os itens do conjunto
        items = {};
    }

    this.size = function() { // Retorna o tamanho do conjunto
        return Object.keys(items).length;
   
    }

    this.values = function() { // Retorna um "array" com todos os valores do conjunto
        var values = [];
        keys = Object.keys(items);

        for (let i = 0; i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }

    this.union = function(otherSet) { // Retorna um "array" com a União entre conjuntos
        var unionConjunto = new Conjunto();
        var values = this.values();

        for (let i = 0; i < values.length; i++) {
            unionConjunto.add(values[i]);
        }

        values = otherSet.values();

        for (let i = 0; i < values.length; i++) {
            unionConjunto.add(values[i]);
        }
        return unionConjunto;
    }

    this.intersection = function(otherSet) {// Retorna um "array" com a Interseção etre conjuntos
        var intersectionConjunto = new Conjunto();
        var values = this.values();

        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionConjunto.add(values[i]);
            }
        }
        return intersectionConjunto;
    }

    this.diference = function(otherSet) { // Retorna um "array" com a Diferença entre os conjuntos
        var diferenceConjunto = new Conjunto();
        var values = this.values();

        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                diferenceConjunto.add(values[i]);
            }
        }
        return diferenceConjunto;
    }

    this.subset = function(otherSet) { // Retorna um "array" com um subconjunto entre dos dois conjuntos
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }    
            }
            return true;
        }
    }
}

var conjuntoA = new Conjunto();
conjuntoA.add(1);
conjuntoA.add(2);
conjuntoA.add(3);

var conjuntoB = new Conjunto();
conjuntoB.add(3);
conjuntoB.add(4);
conjuntoB.add(5);
conjuntoB.add(6);

var conjuntoC = new Conjunto();
conjuntoC.add(2);
conjuntoC.add(3);
conjuntoC.add(4);

var conjuntoD = new Conjunto();
conjuntoD.add(1);
conjuntoD.add(2);

var unionAB = conjuntoA.union(conjuntoB);
console.log(unionAB.values());

var intersectionAC = conjuntoA.intersection(conjuntoC);
console.log(intersectionAC.values());

var diferenceAC = conjuntoA.diference(conjuntoC);
console.log(diferenceAC.values());

console.log(conjuntoD.subset(conjuntoA));
console.log(conjuntoD.subset(conjuntoC));
