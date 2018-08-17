// 1. Stack is a LIFO(Last in First out) structure or we can say FILO(First in Last out).
// 2. A stack mainly comprises of two functions push() and pop().
// 3. push() function is used to insert new elements into the Stack  
// 4. pop() function is used to remove an element from the stack. 
// 5. Both insertion and removal are allowed at only one end of Stack called Top.
// 6. Stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if it is completely empty.

// Algorithm for PUSH operation
// 1. Check if the stack is full or not.
// 2. If the stack is full, then print error of overflow and exit the program.
// 3. If the stack is not full, then increment the top and add the element.


class Stack {
  constructor() {
    this.items = [];
  }

  // adds an item into a stack
  push( item) {
    this.items.push(item);
  }

  // pop item from stack
  pop () {
    this.items.pop();
  }

  // returns top item in stack

  peek () {
    return this.items[this.items.length -1];
  }

  // check if stack is empty
  isEmpty () {
    return this.items === 0;
  }

  // remove all items from stack

  clear () {
    this.items = [];
  }

  // check size of stack

  size () {
    return this.items.length;
  }

  // print out items stack
  print () {
    console.log('stack contains: ', this.items);
  }
}

let stack = new Stack();
console.log('is stack empty: ', stack.isEmpty());
stack.push(5);
stack.push(8);
stack.push(10);
console.log('No of items in stack: ', stack.size());
console.log('Last items in stack: ',stack.peek());
stack.print();
