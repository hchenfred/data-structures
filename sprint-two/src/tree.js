var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
  newTree.parent = this;
};

treeMethods.contains = function(target) {
  var containsHelper = function(node) {
    if (node.value === target) {
      return true;
    } else if (node.children.length > 0) {
      var children = node.children;
      for (var i = 0; i < children.length; i++) {
        if (containsHelper(children[i])) {
          return true;
        } 
      }
    } 
    return false;
  };
  return containsHelper(this);
};

treeMethods.removeFromParent = function() {
  var that = this;
  this.parent.children = _.reject(this.parent.children, function(child) {
    return child === that;
  });
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addChild - O(1)
 // contains - O(n)
