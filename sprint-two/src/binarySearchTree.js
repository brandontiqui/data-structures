var BinarySearchTree = function(value) {
  this._left = undefined;
  this._right = undefined;
  this.value = value;
};

BinarySearchTree.prototype.left = function() {
  return this._left;
};

BinarySearchTree.prototype.right = function() {
  return this._right;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this._left === undefined) {
      this._left = new BinarySearchTree(value);
    } else {
      this._left.insert(value);
    }
  } else if (value > this.value) {
    if (this._right === undefined) {
      this._right = new BinarySearchTree(value);
    } else {
      this._right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    if (this._left === undefined) {
      return false;
    }
    return this._left.contains(value);
  } else if (value > this.value) {
    if (this._right === undefined) {
      return false;
    }
    return this._right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this._left !== undefined) {
    this._left.depthFirstLog(callback);
  }
  if (this._right !== undefined) {
    this._right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
