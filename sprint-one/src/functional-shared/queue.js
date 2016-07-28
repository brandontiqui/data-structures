var Queue = function() {
  var instance = {};
  instance.storage = {};

  jQuery.extend(instance, queueMethods);

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
        this.storage[Number(key) - 1] = this.storage[key];
      }
    }
    delete this.storage[this.size() - 1];     

    return val;
  },
  'size': function () {
    return Object.keys(this.storage).length;
  }
};


