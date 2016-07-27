var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};

  instance.size = stackMethods.size;
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;

  return instance;
};

var stackMethods = {
  'size': function() {
    return Object.keys(this.storage).length;
  },

  'push': function(val) {
    this.storage[this.size()] = val;
  },

  'pop': function() {
    var val = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return val;
  }

};





