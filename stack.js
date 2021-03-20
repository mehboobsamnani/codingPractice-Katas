class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(item) {
        this.items[this.count] = item;
        this.count+=1;
        return this.count - 1;
    }

    pop() {
        this.count-=1;
        let popItem = this.items[this.count - 1];
        delete this.items[this.count - 1];
        return popItem;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.items[this.count - 1];
    }

    isEmpty(){
        return this.count == 0;
    }
} 

let stack = new Stack();
