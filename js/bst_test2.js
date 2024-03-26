class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
		this.count = 1;
	}
	
	getRoot() {
		return this.root;
	}

	getCount() {
		return this.count;
	}

	setCount() {
		this.count = this.count + 1;
	}

	insert(data) {
		const node = new Node(data);
		if(this.root === null) {
			this.root = node;
		} else {
			this.insertNode(this.root, node); 
		}
	}

	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if(node.left === null) {
				node.left = newNode;
				return node;
			} else {
				node = this.insertNode(node.left, newNode)
				return node;
			}

		} if (newNode.data > node.data) {
				if(node.right === null){
					node.right = newNode;
					return node;
				} else {
					node = this.insertNode(node.right, newNode);
					return node;
				}
		}	
	}

	delete(val) {
		this.root = this.removeNode(this.root, val)
	}

	removeNode(node, key) {
		if(node === null) return node;

		if(key < node.data) {
			node = this.removeNode(node.left, key);
			return node;
		} else if(key > node.data){
			node = this.removeNode(node.right, key);
			return node;
		}

		else {
			if (node.left === null && node.right === null){
				node === null;
				return node;
			}

			if(node.left === null) {
				node = node.right;
				return node;
			}
			if(node.right === null) {
				node = node.left;
				return node;
			}

			const aux = this.findMinNum(node.right);
			node.data = aux.data;

			node.right = this.removeNode(node.right, aux.data);
			return node;
		}

	}

	findMinNum(node) {
		if (node.left === null) {
			return node;
		} else {
			return this.findMinNum(node.left)
		}
	}

	  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(this.getCount(), ": ", node.data);
			this.setCount();
      this.inOrderTraversal(node.right);
    }
  }

  preOrderTraversal(node) {
    if (node) {
			console.log(this.getCount(), ": ", node.data);
			this.setCount();
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node) {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }

}

const tree = new BST();
tree.insert(8);
tree.insert(3);
tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(11);
tree.insert(6);
//tree.delete(3);
console.log(tree);
console.log('-----in order---- ')
tree.inOrderTraversal(tree.root);
console.log('-----pre order---- ')
tree.preOrderTraversal(tree.root);
console.log('-----post order---- ');
tree.postOrderTraversal(tree.root);


