var LinkedNode = function() {
  this.value = null;
  this.next = null;
};

var LinkedList = function() {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
