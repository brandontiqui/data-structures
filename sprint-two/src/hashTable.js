

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    this._storage.get(index).push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value = undefined;
  bucket.forEach(function (current) {
    if (current[0] === k) {
      value = current[1];
    }
  });

  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return;
  }

  bucket.forEach(function (current, index, collection) {
    if (current[0] === k) {
      collection.splice(index, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


