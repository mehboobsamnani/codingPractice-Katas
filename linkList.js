class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data){
        let newNode = new LinkedListNode(data,this.head);
        this.head = newNode;
        this.length++;
    }

    getByIndex(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index ; i++){
            current = current.next;
        }
        return current;
    }

    removeAtIndex(index) {
        const prev = this.getByIndex(index);
        console.log(prev);
        prev.next = prev.next.next;
        this.length--;
    }

    print(){
        let output = ''
        let current = this.head;

        while(current){
            output = `${output}${current.value} -> `;
            current = current.next;
        }
       return `${output}null`;
    }
}

class LinkedListNode {
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

let ll = new LinkedList();

ll.insertAtHead(40);
ll.insertAtHead(30);
ll.removeAtIndex(0)
ll.insertAtHead(20);
ll.insertAtHead(10);
console.log('linkList',ll);
console.log(ll.getByIndex(0));
console.log(ll.print());