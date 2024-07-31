// ***** Activity 1: Linked List *****

// *** Task 1: Implement a Node class to represent an element in a linked list with properties value and text. ***
class Node {
    constructor(value, text) {
        this.value = value;
        this.text = text;
        this.next = null;   // Pointer to the next node
    }
}

// Example usage:
const node1 = new Node(1, "First");
const node2 = new Node(2, "Second");
node1.next = node2; // Linking node1 to node2

console.log(node1);

// *** Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes. ***

class LinkedList {
    constructor() {
        this.head = null; // The head (first node) of the linked list
    }

    // Method to add a node to the end of the linked list
    addNode(value, text) {
        const newNode = new Node(value, text);

        if (this.head === null) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Otherwise, traverse the list to find the last node and add the new node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to remove a node from the end of the linked list
    removeNode() {
        if (this.head === null) {
            // If the list is empty, there's nothing to remove
            console.log("The list is empty.");
            return;
        }

        if (this.head.next === null) {
            // If there's only one node, remove it
            this.head = null;
        } else {
            // Otherwise, traverse the list to find the second last node and remove the last node
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
    }

    // Method to display all nodes in the linked list
    displayNodes() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(`Value: ${current.value}, Text: ${current.text}`);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.addNode(1, "First");
list.addNode(2, "Second");
list.addNode(3, "Third");

console.log("Displaying all nodes:");
list.displayNodes();

console.log("\nRemoving a node from the end:");
list.removeNode();
list.displayNodes();

console.log("\nRemoving another node from the end:");
list.removeNode();
list.displayNodes();

console.log("\nRemoving the last node:");
list.removeNode();
list.displayNodes();


// ***** Activity 2: stack *****

// *** Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element). ***

class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to store stack elements
    }

    // Method to add an element 
    push(element) {
        this.items.push(element);
    }

    // Method to remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items.pop();
    }

    // Method to view the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("Popped element:", stack.pop());
console.log("Top element (peek):", stack.peek());

// *** Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off. ***

// Function to reverse a string using the Stack class
function reverseString(str) {
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for (let char of str) {
        stack.push(char);
    }

    // Pop characters off the stack and build the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

const reversedString = reverseString("chaicode");
console.log("Reversed String:", reversedString); // Output: olleh


// ***** Activity 3: Queue *****

// *** Task 5: Implement a Queue class with methods enqueue (add element) , dequeue (remove element), and front (view the first element). ***

class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to store queue elements
    }

    // Method to add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove and return the first element of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items.shift();
    }

    // Method to view the first element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items[0];
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
console.log("Dequeued element:", queue.dequeue());
console.log("Front element:", queue.front());


// *** Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order. ***

// PrinterQueue class to manage the printer queue
class PrinterQueue {
    constructor() {
        this.queue = new Queue(); // Initialize a new Queue instance
    }

    // Method to add a print job to the queue
    addPrintJob(job) {
        this.queue.enqueue(job);
        console.log(`Added print job: ${job}`);
    }

    // Method to process the next print job in the queue
    processPrintJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs to process.");
        } else {
            const job = this.queue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
    }

    // Method to view the next print job without removing it
    viewNextJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs in the queue.");
        } else {
            const job = this.queue.front();
            console.log(`Next print job: ${job}`);
        }
    }
}

const printerQueue = new PrinterQueue();

// Add print jobs to the queue
printerQueue.addPrintJob("Job1 - Document A");
printerQueue.addPrintJob("Job2 - Document B");
printerQueue.addPrintJob("Job3 - Document C");
printerQueue.viewNextJob();

printerQueue.processPrintJob();


// ***** Activity 4: Binary Tree *****

// *** Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right. ***

class TreeNode {
    constructor(value) {
        this.value = value; // The value of the node
        this.left = null;  // Pointer to the left child node (initially null)
        this.right = null; // Pointer to the right child node (initially null)
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

root.right.left = new TreeNode(12);
root.right.right = new TreeNode(18);

console.log("Root Node:", root);


// *** Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes. ***

class BinaryTree {
    constructor() {
        this.root = null; // Root of the binary tree
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
        } else {
            this._insert(this.root, newNode);
        }
    }

    // Helper method to insert a value recursively
    _insert(node, newNode) {
        if (newNode.value < node.value) {
            // If the new value is less, go to the left child
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insert(node.left, newNode);
            }
        } else {
            // If the new value is greater or equal, go to the right child
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insert(node.right, newNode);
            }
        }
    }

    // Method to perform in-order traversal of the binary tree
    inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }

    // Helper method for in-order traversal
    _inOrder(node, result) {
        if (node !== null) {
            this._inOrder(node.left, result); // Visit left subtree
            result.push(node.value); // Visit node itself
            this._inOrder(node.right, result); // Visit right subtree
        }
    }
}

// Example usage:
const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("In-order Traversal:", tree.inOrderTraversal());
// Output: [ 3, 5, 7, 10, 12, 15, 18 ]


// ***** Activity 5: Graph (Optional) *****

//*** Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first Serarch (BFS). ***

// *** Task 10: Use the Graph class to reperesnt a simple network and perform BFS to find the shortest path between two nodes. ***


// NOTE: THis Data Structure Question is done with the help of CHATGPT (Need revision)