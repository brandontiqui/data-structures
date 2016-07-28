var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};

  return instance;
};

var stackMethods = {
  'push': function (val) {
    this.storage[this.size()] = val;
  },
  'pop': function () {
    var val = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return val;
  },
  'size': function () {
    return Object.keys(this.storage).length;
  }
};
