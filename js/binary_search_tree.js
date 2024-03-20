class Node {
	constructor() {
		this.left = null;
		this.right = null;
		this.parent = null;
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
		}
	}

}
