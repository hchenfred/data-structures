var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.count = 0;
  return stack;
};

var stackMethods = {
  push: function(value) {
    this[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      var toBeDeleted = this[this.count - 1];
      delete this[this.count - 1];
      this.count--;
      return toBeDeleted;
    }
  },

  size: function() {
    return this.count;
  }
};


