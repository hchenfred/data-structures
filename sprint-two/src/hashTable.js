var HashTable = function() {
  this._limit = 8;
  this.tupleCount = 0;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  if (this.tupleCount / this._limit >= 0.75) {
    this._limit *= 2;
    
    //copy the tuples in old storage to new storage
    var tempStorage = this._storage;
    
    //create a new storage
    this._storage = LimitedArray(this._limit);
    this.tupleCount = 0;
    for (var i = 0; i < this._limit; i++) {
      this._storage.set(i, []);
    }
    var that = this;
    tempStorage.each(function(tuples) {
      _.each(tuples, function(tuple) {
        //console.log(this);
        var key = tuple[0];
        var value = tuple[1];
        var index = getIndexBelowMaxForKey(key, that._limit);
        that._storage.get(index).push([key, value]);
        that.tupleCount++;

      });
    });
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).push([k, v]);
  this.tupleCount++;
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
  if (this.tupleCount / this._limit <= 0.25) {
    this._limit /= 2;
    
    //copy the tuples in old storage to new storage
    var tempStorage = this._storage;
    
    //create a new storage
    this._storage = LimitedArray(this._limit);
    this.tupleCount = 0;
    for (var i = 0; i < this._limit; i++) {
      this._storage.set(i, []);
    }
    var that = this;
    tempStorage.each(function(tuples) {
      _.each(tuples, function(tuple) {
        //console.log(this);
        var key = tuple[0];
        var value = tuple[1];
        var index = getIndexBelowMaxForKey(k, that._limit);
        that._storage.get(index).push([key, value]);
        that.tupleCount++;
      });
    });
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var that = this;
  _.each(this._storage.get(index), function(tuple, i) {
    if (k === tuple[0]) {
      that._storage.get(index).splice(i, 1);
      that.tupleCount--;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert O(1)
 //retrieve average O(1) worst case O(n)
 //remove average O(1) worst case O(1)


