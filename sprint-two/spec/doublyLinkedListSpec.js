describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
  it('should throw an error when removeHead is called on an empty array', function() {
    expect(doublyLinkedList.removeHead).to.throw('this linked list is empty');
  });

  it('should have a head when a node is added to an empty list', function() {
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.contains(2)).to.equal(true);
  });

  it('should have the last added node as the head when adding multiple nodes', function() {
    doublyLinkedList.addToHead(3);
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.head.value).to.equal(7);
  });

  it('should throw an error when removeTail is called on an empty array', function() {
    expect(doublyLinkedList.removeTail).to.throw('this linked list is empty');
  });

  it('should remove the last node when removeTail is called', function() {
    doublyLinkedList.addToHead(3);
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.removeTail()).to.equal(7);
  });
});
