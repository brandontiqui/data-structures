var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};

  return instance;
};

var queueMethods = {
  'enqueue': function () {

  },
  'dequeue': function () {

  },
  'size': function () {
    return Object.keys(this.storage).length;
  }
};


