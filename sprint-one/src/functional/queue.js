var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

//  var counter = 0;  //A number that increases whenever we add a value.

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
//    counter++;
//    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    var value = storage[0];
    delete storage[0];

    for (key in storage) {
      if (key > 0) {
        storage[Number(key) - 1] = storage[key];
      }


    }

    delete storage[someInstance.size() - 1];

    return value;

    /*
    for (key in storage) {
      var val = storage[key];
      delete storage[key];
      return val;
    }
    */
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
