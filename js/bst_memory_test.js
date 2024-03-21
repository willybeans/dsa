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
			return insertNewNode(this.root, node);
		}
	}

	insertNewNode(node, newNode){	
		if(node.data < newNode.data) {
			if(node.left === null) {
				node.left = newNode;
			} else {
				insertNewNode(node.left, newNode);
			}
		} else if (node.data > this.root) {
				if(node.right === null) {
					node.right === newNode;
				} else {
					insertNewNode(node.right, newNode);
				}
		}
	}
}
