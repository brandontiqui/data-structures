import MD5 from 'md5-es';

var BloomFilter = function() {
  this._limit = 18;
  this._storage = Array(this._limit).fill(false);
};

BloomFilter.prototype.insert = function (k) {
  //Get the index from the 1st hash function
  var index1 = this.hashFunction(1, k);
  //Get the index from the 2nd hash function
  var index2 = this.hashFunction(2, k);
  //Get the index from the 3rd hash function
  var index3 = this.hashFunction(3, k);

  this._storage[index1] = true;
  this._storage[index2] = true;
  this._storage[index3] = true;
};

BloomFilter.prototype.retrieve = function (k) {
  //Get the index from the 1st hash function
  var index1 = this.hashFunction(1, k);
  //Get the index from the 2nd hash function
  var index2 = this.hashFunction(2, k);
  //Get the index from the 3rd hash function
  var index3 = this.hashFunction(3, k);

  return this._storage[index1] && this._storage[index2] && this._storage[index3];
};

BloomFilter.prototype.hashFunction = function (num, k) {
  var hash = 0;

  if (num === 1) {
    for (var i = 0; i < k.length; i++) {
      hash = (hash << 5) + hash + k.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
  } else if (num === 2) {
    console.log(MD5);
    hash = MD5.hash(k);
  } else if (num === 3) {
    hash = SHA512.hash(k);
  }

  return hash % this._limit;
};
