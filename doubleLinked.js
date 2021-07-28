const Node = require('./Node');

class DoublyLinkedList {
  // Create your constructor below:
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      console.log(`The newHead is ${newHead.data}.`);
      console.log(`The currentHead is ${currentHead.data}.`);
      currentHead.setPreviousNode(newHead);
      console.log(`The currentHead.prev is ${currentHead.previous.data}.`);
      newHead.setNextNode(currentHead);
      console.log(`The newHead.next is ${newHead.next.data}.`);
    }
    if (this.head) {
      console.log(`The this.head is ${this.head.data}.`);
    } else {
      console.log(`The this.head is ${this.head}.`);
    }
    this.head = newHead;
    console.log(`The this.head is ${this.head.data}.`);
    if (this.tail) {
      console.log(`The this.tail is ${this.tail.data}.`);
    }

    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();

      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }

    return nodeToRemove;
  }

  // Build Swap Method
  // swapNodes(data1, data2) {
  //   const node1 = data1;
  //   const node2 = data2;
  //
  //   console.log(`The first node we are looking for is: ${node1}`); //testing
  //   console.log(`The first node we are looking for is: ${node2}`); //testing
  //
  //   const nodePrev1 = null;
  //   const nodePrev2 = null;
  //
  //   let currentNode = this.head
  //
  //   while (currentNode) {
  //     if (currentNode.data = data1) {
  //       console.log(`First node found!`);
  //       console.log(`Data: ${currentNode.data}`);
  //       console.log(`Prev: ${currentNode.previous}`);
  //       console.log(`Next: ${currentNode.next.data}`);
  //       return;
  //     }
  //   }
  //
  // }

  getData(data) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        console.log(`Node found!`);
        console.log(`Data: ${currentNode.data}`);
        console.log(`Prev: ${currentNode.previous}`);
        console.log(`Next: ${currentNode.next.data}`);
      }
    }
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}
































module.exports = DoublyLinkedList;
