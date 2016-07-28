var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.size()] = val;
};

Queue.prototype.dequeue = function () {
  for (key in this.storage) {
    if (key === '0') {
      var val = this.storage[key];
    } else {
      this.storage[key - 1] = this.storage[key];
    }
  }

  delete this.storage[this.size() - 1];
  return val;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

