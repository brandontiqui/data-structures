var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  $.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var newTree = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
