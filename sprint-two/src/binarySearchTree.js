var BinarySearchTree = function(value) {
  var tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = value;
  _.extend(tree, binaryTreeMethods);
  return tree;
};

var binaryTreeMethods = {
  insert: function(value) {
    var currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = BinarySearchTree(value);
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = BinarySearchTree(value);
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return;
      }
    }
  },
  contains: function(value) {
    var currentNode = this;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  },
  depthFirstLog: function(cb) {
    var dfs = function(treeNode) {
      if (treeNode) {
        cb(treeNode.value);
        dfs(treeNode.left);
        dfs(treeNode.right);
      } 
    };
    dfs(this);
  },
  breathFirstLog: function(cb) {
    var stack = [this];
    while (stack.length > 0) {
      var tree = stack.shift();
      cb(tree.value);
      if (tree.left !== null) {
        stack.push(tree.left);
      }
      if (tree.right !== null) {
        stack.push(tree.right);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert() - O(log(n))
 //contains() - O(log(n))
 //depthFirstLog - O(n)
