class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

class BST {
	constructor(){
		this.root = null;
	}
	
	insert(data) {
		const node = new Node(data);
		if (this.root === null) {
			this.root = node;
			return node;
 		} else {
			return this.insertNewNode(this.root, node);
		}
	}

	insertNewNode(node, newNode){	
		if(newNode.data < node.data) {
			if(node.left === null) {
				node.left = newNode;
			} else {
				this.insertNewNode(node.left, newNode);
			}
		} else if (newNode.data > node.data) {
			if(node.right === null) {
				node.right = newNode;
			} else {
				this.insertNewNode(node.right, newNode);
			}
		}
	}
	delete(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, key) {
		if(node === null) return node;

		if (key < node.val) {
			node.left = this.removeNode(node.left, key)
			return node;
		} else if(key > node.val) {
			node.right = this.removeNode(node.right, key)
			return node;
		} else {
			if(node.right === null && node.left === null) {
				node = null;
				return node;
			}

			if(node.left === null) {
				node.right = null;
				return node;
			} else if(node.right === null) {
				node.left = null;
				return node
			}

			const aux = this.findMinNode(node.right)
			node.data = aux.data;

			node.right = this.removeNode(node.right, aux.data);
			return node;
		}
	}

	findMinNode(node) {
		if(node.left === null) {
		return node;
		} else {
			return this.findMinNode(node.left);
		}
	}
}


const tree = new BST;
tree.insert(8);
tree.insert(3);
tree.insert(11);
tree.insert(1);
tree.insert(5);
tree.insert(9)
console.log("tree:", tree);
