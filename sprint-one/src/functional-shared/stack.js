var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};

  instance.size = stackMethods.size;
  return instance;
};

var stackMethods = {
  'size': function() {
    return Object.keys(this.storage).length;
  },

  'push': function(val) {
  }
};





