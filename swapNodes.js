const LinkedList = require('./doubleLinked.js')

const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 6, 5);
// testList.printList();

function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);

  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  // console.log(`node1 = ${node1.data}`); //0
  let node2 = list.head;
  console.log(`node2 = ${node2.data}`); //0

  if (data1 === data2) {
    console.log('Elements are the same - no swap to be made');
    return;
  }

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }
  // console.log(`node1Prev = ${node1Prev.data}`); //5
  // console.log(`After 1st while node1 = ${node1.data}`); //6
  // console.log(`node1 next = ${node1.next.data}`); //7

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  // console.log(`Second while node2Prev = ${node2Prev.data}`); //4
  console.log(`node2 = ${node2.data}`); //5
  console.log(`node2 next = ${node2.next.data}`); //6

  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more element is not in the list');
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    console.log(`node1Prev = ${node1Prev.data}`);
    console.log(`node1Prev next = ${node1Prev.next.data}`);
    node1Prev.setNextNode(node2);
    console.log(`node1Prev = ${node1Prev.data}`);
    console.log(`node1Prev next = ${node1Prev.next.data}`);
    console.log(`node2 = ${node2.data}`); //5
    console.log(`node2 next = ${node2.next.data} !IMPORTANT Why did this change to 5? I think it should be 6. Where is the node2.setNextNode() being called?`); //5 WHY IS IT 5?!?!
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();

  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}
