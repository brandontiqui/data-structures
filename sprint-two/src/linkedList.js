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
    var value = this.head.value;

    //Shift head:
    this.head = this.head.next;

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
