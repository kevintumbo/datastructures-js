// 1. A queue is a ordered collection of items that follows the FIFO(First In First Out) principle
// 2. The addition of new elements in a queue is at the tail and removal is at the front.

class Queue {
  constructor() {
     this.items = [];   
  }

  // adds an item or several items at the back of the queue
  enqueue(item) {
    this.items.push(items);
  }

  // removes the first element of the queue
  // shift
  dequeue() {
    return this.items.shift;
  }

  // returns the first element at the front of the queue. does not remove the element.
  front() {
    return this.items[0];
  }

  // returns true if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // return size of queue
  size() {
    return this.items.length;
  }
}