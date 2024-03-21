class Node {
	constructor() {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

class BinarySearchTree {	
	constructor() {
		this.root = null;
	}

	insert(data) {
		let newNode = new Node(data);
		if(this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(node, newNode){
		if(newNode.data < node.data){
			if(node.left === null) {
			node.left = newNode
			} else {
				this.insertNode(node.left, newNode);
			}
		} else if (newNode.data > node.data) {
			if(node.right === null) {
				node.right = newNode
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	remove(data) {
	this.root = this.removeNode(this.root, data)
	}

	removeNode(node, key) {
		if(node === null) return null;

		if(key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			//no children
			if(node.left === null && node.right === null) {
				node = null;
				return node;
			}
			// 1 child 
			if (node.left === null) {
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node
			}
			// deleting with 2 children
			// min node of the right subtree is stored in aux
			const aux = this.findMinNode(node.right);
			node.data = aux.data;
			
			node.right = this.removeNode(node.right, aux.data);
			return node;
		}
	}

	fineMinNode(node) {
	if(node.left === null) {
	return node;
	} else {
			return this.findMinNode(node.left);
		}
	}

}
