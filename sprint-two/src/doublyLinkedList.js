var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.prev = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var headValue = list.head.value;
      var newHead = list.head.next;
      if (newHead === null) {
        list.head = null;
      } else {
        newHead.prev = null;
        list.head = newHead;        
      }
      return headValue;
    }
    throw 'this linked list is empty';
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false; 
  }; 


  list.addToHead = function(target) {
    var newNode = Node(target);
    if (list.head === null) {
      list.head = newNode;
    } else {
      newNode.next = list.head;
      list.head.prev = newNode;
      list.head = newNode;
    }
  };

  list.removeTail = function() {
    if (list.tail) {
      var tailValue = list.tail.value;
      var newTail = list.tail.prev;
      if (newTail) {
        newTail.next = null;
        list.tail.prev = null;
      } else {
        list.tail = null;
      }
      return tailValue;
    } else {
      throw 'this linked list is empty';
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addToTail - O(1)
 // removeHead - O(1)
 // contains - O(n)
