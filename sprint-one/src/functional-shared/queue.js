var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.start = 0;
  queue.end = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.end] = value;
    this.end++;
  },
  dequeue: function() {
    if (this.end - this.start > 0) {
      var toBeDeleted = this[this.start];
      delete this[this.start];
      this.start++;
      return toBeDeleted;
    }
  },
  size: function() {
    return this.end - this.start;
  }
};


