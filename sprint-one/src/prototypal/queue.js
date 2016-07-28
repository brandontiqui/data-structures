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
    for (key in this.storage) {
      if (key === '0') {
        var val = this.storage[key];
      } else {
        this.storage[key - 1] = this.storage[key];
      }
    }
    delete this.storage[this.size() - 1];
    return val;
  },
  'size': function () {
    return Object.keys(this.storage).length;
  }
};


