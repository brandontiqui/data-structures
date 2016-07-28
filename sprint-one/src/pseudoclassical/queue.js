var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.size()] = val;
};

Queue.prototype.dequeue = function () {

};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

