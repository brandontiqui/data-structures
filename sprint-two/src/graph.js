var Vertex = function(val) {
  this.data = val;
  this.edges = [];
};

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(new Vertex(node));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var isFound = false;
  this.storage.forEach(function(vertex) {
    if (vertex.data === node) {
      isFound = true;
    }
  });
  return isFound;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.storage.forEach(function (vertex, index, collection) {
    if (vertex.data === node) {
      collection.splice(index, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isFound = false;
  this.storage.forEach(function (vertex) {
    if (vertex.edges.indexOf(fromNode) !== -1 && vertex.data === toNode) {
      isFound = true;
    }
  });
  return isFound;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage.forEach(function (vertex) {
    if (vertex.data === fromNode) {
      if (vertex.edges.indexOf(toNode) === -1) {
        vertex.edges.push(toNode);
      }
    } else if (vertex.data === toNode) {
      if (vertex.edges.indexOf(fromNode) === -1) {
        vertex.edges.push(fromNode);
      }
    }
  });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage.forEach(function (vertex, index, collection) {
    if ((vertex.data === fromNode) && (vertex.edges.indexOf(toNode) !== -1)) { 
      var myIndex = vertex.edges.indexOf(toNode);
      vertex.edges.splice(myIndex, 1);
    } else if ((vertex.data === toNode) && (vertex.edges.indexOf(fromNode) !== -1)) {
      var myIndex = vertex.edges.indexOf(toNode);
      vertex.edges.splice(myIndex, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.storage.forEach(function (vertex, index, collection) {
    cb(vertex.data);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


