var LinkedNode = function() {
  this.value = null;
  this.next = null;
  this.previous = null;
};

var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val) {
    if (list.head === null) {
      this.head = new LinkedNode();
      this.head.value = val;
      this.tail = this.head;
    } else {
      var newNode = new LinkedNode();
      newNode.value = val;
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.addToHead = function(val) {
    if (list.tail === null) {
      this.tail = new LinkedNode();
      this.tail.value = val;
      this.head = this.tail;
    } else {
      var newNode = new LinkedNode();
      newNode.value = val;
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  };

  list.removeHead = function() {
    var value = this.head.value;

    //Shift head:
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.previous = null;
    }

    return value;
  };

  list.removeTail = function() {
    var value = this.tail.value;

    //Shift tail:
    this.tail = this.tail.previous;
    this.tail.next = null;

    return value;
  };

  list.contains = function(target) {
    for (var i = this.head; i !== null; i = i.next) {
      if (i.value === target) {
        return true;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
