describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should add numeric values to a set', function() {
    set.add(5);
    set.add(4);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(4)).to.equal(true);
  });

  it('should remove numeric values from a set', function() {
    set.add(5);
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
  });

  it('should add input objects of any type', function() {
    var array = [5, 4, 3];
    var object = { firstName: 'Fred', lastname: 'Flinstone'};
    set.add(array);
    expect(set.contains(array)).to.equal(true);
    set.add(object);
    expect(set.contains(object)).to.equal(true);
  });

});
