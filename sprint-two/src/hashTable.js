var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value;
  _.each(this._storage.get(index), function(tuple) {
    if (k === tuple[0]) {
      value = tuple[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var that = this;
  _.each(this._storage.get(index), function(tuple, i) {
    if (k === tuple[0]) {
      that._storage.get(index).splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert O(1)
 //retrieve average O(1) worst case O(n)
 //remove average O(1) worst case O(1)


