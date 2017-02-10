// Instantiate a new graph
var Graph = function(value) {
  this.adj = [];
  this.value = value;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph(node);
  this.adj.push(newNode);
  newNode.adj.push(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  
  var containsHelper = function(currentNode) {
    if (currentNode.value === node) {
      return true;
    } else if (currentNode.adj.length > 0) {
      for (var i = 0; i < currentNode.adj.length; i++) {
        if (containsHelper(currentNode.adj[i])) {
          return true;
        }
      }
    } 
    return false;
  };
  return containsHelper(this);
};

Graph.prototype.findNode = function(nodeValue) {
  var marked = [];
  var findNodeHelper = function(currentNode) {
  
    marked.push(currentNode);
    if (currentNode.value === nodeValue) {
      return currentNode;
    } else if (currentNode.adj.length > 0) {
      for (var i = 0; i < currentNode.adj.length; i++) {
        if (!marked.includes(currentNode.adj[i])) {
          var foundNode = findNodeHelper(currentNode.adj[i]);
          if (foundNode !== null) {
            return foundNode;
          }
        }
      }
    } 
    return null;
  };
  return findNodeHelper(this);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeValue) {
  var foundNode = this.findNode(nodeValue);
  if (foundNode) {
    var neighbors = foundNode.adj;
    foundNode.adj = [];
    _.each(neighbors, function(neighbor) {
      neighbor.adj = _.reject(neighbor.adj, function(item) {
        return item === foundNode;
      });
    });
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue) {
  var fromNode = this.findNode(fromNodeValue);
  //console.log(fromNode);
  var toNode = this.findNode(toNodeValue);
  return fromNode.adj.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
  var fromNode = this.findNode(fromNodeValue);
  //console.log(fromNode);
  var toNode = this.findNode(toNodeValue);
  fromNode.adj.push(toNode);
  toNode.adj.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue) {
  var fromNode = this.findNode(fromNodeValue);
  var toNode = this.findNode(toNodeValue);
  fromNode.adj = _.reject(fromNode.adj, function(adjNode) {
    return adjNode === toNode;
  });
  toNode.adj = _.reject(toNode.adj, function(adjNode) {
    return adjNode === fromNode;
  });


};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


