var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addChild - O(1)
 // contains - O(n)
