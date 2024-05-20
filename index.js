/* let user = {
  name: "Afolabi",
  age: 30,
  magic: true,
  scream: function(){
    console.log('ahhhhhhh!!!')
  }
}

// console.log(`Hello ${user.name}!, You are ${user.age} years of age`) // 0(1)
// console.log(user.scream())

user.spell = "Abra kadabra"; // 0(1)

console.log(user)

// In the new version of JavaScript and ES6, we can use Map and Set to store key-value pairs.

const a = new Map();
const b = new Set(); */

// Implementing A Hash Table

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push(key, value)
    return this.data;
  }

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++)  {
        if(currentBucket[i][0] === key){
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }
}

const myHashTable = new HashTable(2);
// myHashTable.get("grapes", 10000);
// myHashTable.get("apple", 54);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("apples", 54));
console.log(myHashTable.get('apples'));

