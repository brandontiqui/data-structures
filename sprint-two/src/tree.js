var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  $.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length === 0) {
    return false;
  }
  // this.children.forEach(function(child) {
  //   return child.contains(target);
  // });
  var isFound = false;
  for (var i = 0; i < this.children.length; i++) {
    isFound = this.children[i].contains(target);
    if (isFound) {
      break;
    }
  }

  return isFound;
};

treeMethods.removeFromParent = function(value) {
  //If the current node is the one we are looking for:
  if (this.value === value) {
    //Remove the current node from the parent's list of children:
    if (this.parent !== null) {
      this.parent.children.forEach(function(child, index, collection) {
        if (child.value === value) {
          collection.splice(index, 1);
        }
      });
    }

    //Remove the current node's parent and return:
    this.parent = null;
    return this;
  }

  //Traverse the tree via recursion:
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].removeFromParent(value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
