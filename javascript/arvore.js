function BinarySearchTree() { // Árvore de busca binária
    var Node = function() {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;

    this.insert = function(key) { // Insere uma chave
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    var insertNode = function(node, newNode) { // Função auxiliar do insert
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(nod.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    this.search = function(key) { // Busca uma chave
        return searchNode(root, key);
    }

    var searchNode = function(node, key) { // Função auxiliar do search
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key){
            return searchNode(node.right, key);
        } else {
            return true
        }
    }

    this.remove = function(key) { // Remove uma chave

    }


    this.min = function() { // Retorna a menor chave
        
    }

    this.max = function() { // Retorna a menor chave
        
    }

    this.inOrderTraverse = function() { // Visita todos os nós da árvore usando um percurso em ordem 

    }

    this.preOrderTraverse = function() { // Visita todos os nós da árvore usando um percurso em pré ordem 

    }

    this.postOrderTraverse = function() { // Visita todos os nós da árvore usando um percurso em pós ordem 

    }
}