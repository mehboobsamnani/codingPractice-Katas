function hashFunction(val, length) {
    let hash = 0;

    for (let i = 0; i < val.length; i++) {
        hash += val.charCodeAt(i);
    }

    return hash % length;

}

class HashTable {
    constructor() {
  
        this.table = new Array(100);
        this.numOfItems = 0;
    }

    setItem(key, val) {
        const idx = hashFunction(key,this.table.length);
        this.table[idx] = val;
    }
    getItem(key) {
        const idx = hashFunction(key,this.table.length);
        return this.table[idx];
    }
}

let hT = new HashTable();
hT.setItem("name","mehboob")
hT.setItem("age","29")
hT.setItem("uni","ssuet")
hT.setItem("wife","anusha")

console.log(hT.getItem("wife"));
console.log(hT.getItem("age"));

console.log(hT.getItem("name"));
