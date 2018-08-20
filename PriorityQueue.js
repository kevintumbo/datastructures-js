// Priority Queue elements added and removed based on priority

function PriorityQueue() {
  
  let items = [];
  
  QueueElement = function(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue =  function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    let added =  false;
    for (let i=0; i < items.length; i++) {
      if(queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    } 

    if(!added) {
      items.push(queueElement);
    }
  }

  this.print = function() {
    for(i=0; i < items.length; i++){
      console.log('name: ' + items[i].element + ', Priority: ' + items[i].priority);
    }
   
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Jack",2)
priorityQueue.enqueue("John",2)
priorityQueue.enqueue("Jill",1)
priorityQueue.enqueue("James",1)
priorityQueue.print();