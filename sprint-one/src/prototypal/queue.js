var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};

  return instance;
};

var queueMethods = {
  'enqueue': function (val) {
    this.storage[this.size()] = val;
  },
  'dequeue': function () {

  },
  'size': function () {
    return Object.keys(this.storage).length;
  }
};


